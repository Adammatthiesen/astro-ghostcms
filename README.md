<img src="https://ghostdemo.matthiesen.xyz/content/images/size/w256h256/2024/01/spaceghost.png" width="64px" />

# Welcome to Astro-GhostCMS

Want to Chat?  Join our [Discord](https://discord.gg/u7NZqUyeAR)

## Quick Start

```sh
# Run this command and follow the prompt!
npx @matthiesenxyz/create-astro-ghostcms
# Want to pass arguments through to the command?  YOU CAN!
#  `--install`     : Sets Install Dependencies to 'true'
#  `--git`         : Initiates git Repo
#  `--pkg-manager` : Specify your Package manager(i.e. npm, yarn | DEFAULT: pnpm)
```

For a full always up to date documentation please checkout [Our Website](https://astro-ghostcms.xyz)

**Demo site Deploy status**:

![Vercel](https://vercelbadge.vercel.app/api/matthiesenxyz/astro-ghostcms)

## Repo Structure

This repo is structured as a monorepo.  All of our astro-ghostcms packages can be found under the `packages` folder.  These are all independently published or internal packages that can be found on [npmjs.com](https://npmjs.com)

In this Repo you will also find the Following:

- `demo`: [Demo Site](https://demo.astro-ghostcms.xyz)
- `www`: [Public Site](https://astro-ghostcms.xyz)
- `playground`: Development and Testing
- `packages/`:
  - `create-astro-ghostcms`: CLI Utility to quickly deploy new Astro-GhostCMS projects.
  - `astro-ghostcms`: The main Integration!
  - `astro-ghostcms-theme-default`: The Default theme in integration mode.
  - `tsconfig`: *LOCAL* Development package for `@ts-ghost/core-api`.

## Contributing

This is a `pnpm` workspace and requires `pnpm` to function properly

To setup this workspace clone this repo and run the following command:

```sh
pnpm install
```

Then you can run the playground:

```sh
pnpm playground:dev
```

### Notices

*Ghost is a trademark of [The Ghost Foundation](https://ghost.org/trademark/). This project is not directly related to or provided by The Ghost Foundation and is intended to help create a easier method to utilize their provided JavaScript tools to link a Headless GhostCMS install in to your Astro project.* 
