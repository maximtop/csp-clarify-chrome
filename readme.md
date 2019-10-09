# Example non-blocked request by CSP policy in the Chrome

## Prerequisites 
`node >= 10`
`yarn`

## How to start 
- `yarn install`
- `yarn start`

## Description
This repository will launch two servers `localhost:3000` and `localhost:5000`
If you go to the http://localhost:3000 in Chrome you will see block with text. Even though this text should not be loaded because server specifies `'Content-Security-Policy', 'connect-src http://localhost:3000'` for worker request.

Contrary in the firefox text wont appear because firefox applies csp policy to the worker request.
