﻿using Consul;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.Extensions.Hosting;

namespace Infrastructure.ServiceDiscovery
{
    public class ServiceDiscoveryHostedService : IHostedService
    {
        private readonly IConsulClient _client;
        private readonly ServiceConfig _config;
        private readonly IHostApplicationLifetime _lifetime;
        private readonly IServer _server;
        private readonly string _registrationId;

        public ServiceDiscoveryHostedService(IConsulClient client, 
            ServiceConfig config, 
            IServer server,
            IHostApplicationLifetime lifetime)
        {
            _client = client;
            _config = config;
            _server = server;
            _lifetime = lifetime;
            _registrationId = $"{_config.ServiceName}-{_config.ServiceId}";
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _lifetime.ApplicationStarted.Register(async () =>
            {
                var serverAddressFeatures = _server.Features.Get<IServerAddressesFeature>();
                var addressUrl = serverAddressFeatures.Addresses.First();
                var addressUri = new Uri(addressUrl);

                var registration = new AgentServiceRegistration
                {
                    ID = _registrationId,
                    Name = _config.ServiceName,
                    Address = addressUri.Host,
                    Port = addressUri.Port
                };

                await _client.Agent.ServiceDeregister(registration.ID, cancellationToken);
                await _client.Agent.ServiceRegister(registration, cancellationToken);
            });

            return Task.CompletedTask;
        }

        public async Task StopAsync(CancellationToken cancellationToken)
        {
            await _client.Agent.ServiceDeregister(_registrationId, cancellationToken);
        }
    }
}