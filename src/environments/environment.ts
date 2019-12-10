// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  keycloak: {
    url: 'http://works.wtf/auth',
    realm: 'instagras',
    clientId: 'instagras-front',
  },
  baseUserApiUrl:'http://works.wtf/userws',
  //baseUserApiUrl:'http://localhost:3000/userws',
  instagrasUrl:'http://localhost:8100',
  baseLikeApiUrl:'http://localhost:3000/likesws'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
