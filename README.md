### Deploying to wilsonhacks.org

#### Windows

1. Open a cmd window on your computer.
2. Navigate to the directory called "WilsonHacksWebsite".
3. Type `npm run build-windows` in the cmd window.
4. If you get the option `docs, Are you sure (Y/N)?` type `y` and press enter.
5. If you get the option `Overwrite C:\...\WilsonHacksHackathon\WilsonHacksWebsite\docs\asset-manifest.json (Yes/No/All)?` then type `a` and then type `y` and press enter.
6. If you get the option `Does docs specify a file name or directory name on the target (F = file, D = directory)?` type `D`
7. If you get the option `Build, Are you sure (Y/N)?` type `y` and press enter.
8. Then run `git add .` to track the new files.
9. Next commit the changes using `git commit -m "Deploy: custom message"` or by your github management program of choice (aka GitHub Desktop).
10. Lastly, push your changes to the repository `git push`.

#### MacOS

1. Open a terminal window on your computer.
2. Navigate to the directory called "WilsonHacksWebsite".
3. Type `npm run build-macos` in the terminal window.
4. Then run `git add .` to track the new files.
5. Next commit the changes using `git commit -m "Deploy: custom message"` or by your github management program of choice (aka GitHub Desktop).
6. Lastly, push your changes to the repository `git push`.
