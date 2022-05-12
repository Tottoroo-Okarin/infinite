using Consul;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Net;

namespace Infrastructure.ServiceDiscovery
{
    public class ServiceDiscoveryHostedService : IHostedService
    {
        private readonly IConsulClient _client;
        private readonly ServiceConfig _config;
        private readonly IHostApplicationLifetime _lifetime;
        private readonly IServer _server;
        private readonly string _registrationId;
        private readonly ILogger<ServiceDiscoveryHostedService> _logger;

        public ServiceDiscoveryHostedService(IConsulClient client, 
            ServiceConfig config, 
            IServer server,
            ILogger<ServiceDiscoveryHostedService> logger,
            IHostApplicationLifetime lifetime)
        {
            _client = client;
            _config = config;
            _server = server;
            _lifetime = lifetime;
            _logger = logger;
            _registrationId = $"{_config.ServiceName}-{_config.ServiceId}";
            _logger.LogCritical($"ServiceName - {_config.ServiceName}");
            _logger.LogCritical($"ServiceDiscoveryAddress - {_config.ServiceDiscoveryAddress}");
            _logger.LogCritical($"ServiceId - {_config.ServiceId}");
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _lifetime.ApplicationStarted.Register(async () =>
            {
                _logger.LogInformation($"ADDRESS URL - {Dns.GetHostEntry(Dns.GetHostName()).AddressList[0].ToString()}");

                var registration = new AgentServiceRegistration
                {
                    ID = _registrationId,
                    Name = _config.ServiceName,
                    Address = Dns.GetHostEntry(Dns.GetHostName()).AddressList[0].ToString(),
                    Port = 80
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