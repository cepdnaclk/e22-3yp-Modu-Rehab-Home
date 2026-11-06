# ModuRehab public project website

React 19, Vite 8, and Tailwind CSS 4 source exported from Figma. This is the
public showcase, separate from `software/web_dashboard/`. Device imagery,
home-use scenes, and dashboard readings are illustrative concepts.

## Local development

Use Node.js 22.12+ (or a compatible newer release) and pnpm 10.34.3. From this
directory, run:

```sh
npx --yes pnpm@10.34.3 install --frozen-lockfile
npx --yes pnpm@10.34.3 dev
```

Open the printed URL with `/e22-3yp-Modu-Rehab-Home/` appended. Stop with Ctrl+C.
On Windows PowerShell, use `npx.cmd` if script execution policy blocks `npx`.

```sh
npx --yes pnpm@10.34.3 build
npx --yes pnpm@10.34.3 preview --host 127.0.0.1
```

Build performs TypeScript checks, creates ignored `dist/` output, and copies
`docs/data/` to `dist/data/`. Never commit `node_modules/`, `.pnpm-store/`, or
`dist/`. Asset paths use Vite's base URL for repository-hosted Pages.

## GitHub Pages

The workflow in `.github/workflows/project-website.yml` builds changes on pull
requests without deploying them. Successful website or metadata changes pushed
to main deploy automatically. A manual run on main is also supported.

One-time setup after reviewing and committing the changes:

1. In the GitHub repository, select **Settings > Pages > Build and deployment >
   Source > GitHub Actions**. This replaces branch-based publication from /docs.
2. Push the reviewed website and workflow to main, or merge a reviewed pull
   request. If the initial run happened before Pages was configured, use
   **Actions > Project website > Run workflow** and select main.
3. Wait for both build and deploy jobs to succeed. Check the deployment URL in
   the github-pages environment and open it to verify the published website.

The Figma-designed React website is the public project homepage; there is no
intermediate landing page or redirect required.

## Department project listing

The department's project listing and the project website are separate sites:

```text
Department project listing
  -> Project Page button
  -> https://cepdnaclk.github.io/e22-3yp-Modu-Rehab-Home/
  -> Figma-designed ModuRehab website
```

The department's documented metadata remains at `docs/data/index.json` with
`cover_page.jpg` and `thumbnail.jpg` beside it. Keep these files committed in
that location; the React build also publishes copies under `/data/` for the
listing's image links. Do not move the website source into `docs/data/`, add a
new metadata field to guess the listing URL, or replace the repository name.

The department's [project registration instructions](https://projects.ce.pdn.ac.lk/docs/how-to-add-a-project/)
describe the listing and metadata convention. This workflow changes how the
GitHub Pages content is built, while retaining the same project homepage URL.
The listing is maintained externally: if its Project Page button points to a
different address after Pages is live, ask the department site maintainers to
correct that link. Local repository changes cannot edit the department site.

Existing `docs/` sources and configuration remain unchanged in the repository.
They are not rendered by this React build. Public metadata and cover images are
copied to `/data/`; documentation is linked on GitHub. The intended homepage is
`https://cepdnaclk.github.io/e22-3yp-Modu-Rehab-Home/`.

The `.figma/` export remains for provenance; production builds no longer depend
on its preview plugins or metadata. Update real implementation status before
publishing new claims. No backend, session storage, or treatment functionality
is provided by this static website.
