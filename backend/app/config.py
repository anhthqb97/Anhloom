from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "Anhloom API"
    environment: str = "development"
    database_url: str = "postgresql://postgres:postgres@localhost:5432/company_web"
    redis_url: str = "redis://localhost:6379/0"
    internal_api_key: str = "dev-internal-api-key"
    openai_api_key: str = ""
    anthropic_api_key: str = ""
    rate_limit_requests: int = 60
    rate_limit_window_seconds: int = 60
    cors_origins: str = "http://localhost:3000"


settings = Settings()
