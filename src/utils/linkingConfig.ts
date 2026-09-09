// linkingConfig.ts or inside your navigation file
import { LinkingOptions } from '@react-navigation/native';

export const linking: LinkingOptions<any> = {
  // All schemes that should be caught by this routing configuration
  prefixes: ['testapp://', 'https://testapp.com', 'http://testapp.com'],

  // Custom configuration to map URL paths directly to screen names
  config: {
    screens: {
      Home: 'home',                    // testapp://home
      Profile: {
        path: 'user/:id',              // testapp://user/123 -> Opens Profile with route.params.id = 123
      },
      Settings: 'settings',            // testapp://settings
      NotFound: '*',                   // Fallback for unrecognized URLs
    },
  },
};
