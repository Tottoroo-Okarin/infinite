FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Src/Services/TodosService/TodosService.csproj", "Src/Services/TodosService/"]
COPY ["Src/Common/Infrastructure/Infrastructure.csproj", "Src/Common/Infrastructure/"]
RUN dotnet restore "Src/Services/TodosService/TodosService.csproj"
COPY . .
WORKDIR "/src/Src/Services/TodosService"
RUN dotnet build "TodosService.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "TodosService.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "TodosService.dll"]