/* eslint no-unused-vars: off */
declare let CSRF_TOKEN: string;
declare let urls: { string: string; };
declare let INTERACTIVITY: string;
declare let INTERACTIVITIES: {
    fullControl: string;
    fullVoting: string;
    upvotesOnly: string;
    noControl: string;
};
declare let ADMIN: boolean;
declare let CONTROLS_ENABLED: boolean;

declare let ADDITIONAL_KEYWORDS: string;
declare let FORBIDDEN_KEYWORDS: string;
declare let CLIENT_STREAMING: boolean;
declare let YOUTUBE_SUGGESTIONS: number;
declare let SPOTIFY_SUGGESTIONS: number;
declare let SOUNDCLOUD_SUGGESTIONS: number;
declare let JAMENDO_SUGGESTIONS: number;

declare let SPOTIFY_SCOPE: string;
declare let SPOTIFY_OAUTH_AUTHORIZE_URL: string;

interface JQuery {
  // unfortunately, bootstrap and jqueryui
  // introduce conflicts with types 'button' and 'tooltip'
  // mock the types for the few jqueryui elements we use
  autocomplete: any;
  sortable: any;
}
interface JQueryStatic {
  keyframe: any;
  // jqueryui
  ui: any;
}
