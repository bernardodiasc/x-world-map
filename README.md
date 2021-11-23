# X-Map

This is a proof of concept for X-Team's global map. Be advised that it's on very early stage but opended for contributions.

## Getting Started

First create a `.env.local` in the root of this project and add the keys:

### Google Maps API

```
NEXT_PUBLIC_GMAPS_API_KEY
```

The Google Maps API key is required to appropriatedly load the map. In order to get the key you must create a new project at Google Cloud, then activate the Google Maps API for this new project, and also add Billing details, see more:

### Experimental data from server

```
NEXT_PUBLIC_API_URL=http://localhost:1337
```

If you have a server with compatible profile data, you must run the server and add this env var.

### Development

To run your project locally:

```bash
yarn dev
```

## Contributing

If you want to add your geographic information to the map, please submit a PR adding a new folder named with your slack handle at https://github.com/bernardodiasc/x-map/tree/master/public/data. Inside this newly created folder it's expected to have an `avatar.jpg` and a `profile.json`.

At this stage the project is very simple and the shape of your profile must be like that:

```json
{
  "type": "profile",
  "uid": "bernardo",
  "name": "Bernardo Dias da Cruz",
  "coordinates": [-45.0722002, -23.3975554]
}
```

Then remember to import and export your profile in the https://github.com/bernardodiasc/x-map/tree/master/public/data/index.js.

### Presentatation and features

Prototype (just a draft): https://www.figma.com/file/KSnkYUzmLP06jbv0vhTMrU/X-MAP?node-id=0%3A1

Contributors:

- Bernardo Dias (developer)
- Felipe Dias (designer)
