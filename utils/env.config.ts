export interface EnvConfig {
  URL: string;
  USERNAME: string;
  PASSWORD: string;
  INVALIDPASSWORD: string;
}
const configs: Record<string, EnvConfig> = {
  dev: {
    URL: 'https://www.saucedemo.com',
    USERNAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    INVALIDPASSWORD: 'secret_sauce1',
  },
  staging: {
    URL: 'https://www.saucedemo.com',
    USERNAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    INVALIDPASSWORD: 'secret_sauce1',
  },
  prod: {
    URL: 'https://www.saucedemo.com',
    USERNAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    INVALIDPASSWORD: 'secret_sauce1',
  },
};

export function getEnvConfig(env: string): EnvConfig {
  return configs[env] || configs['dev'];
}

// for run on the different enviroment

// $env:ENV = "dev"
// npx playwright test

// $env:ENV = "staging"
// npx playwright test

// $env:ENV = "prod"
// npx playwright test

// to run with tagging

// npx playwright test --grep "smoke"
// npx playwright test --grep "regression"
