Most Common Git Issues

* Git Repos cannot be nested within each other
-- Keep your repo path i.e. ~/digitalcrafts/{your_repo}

* DO NOT PUSH DIRECTLY TO MAIN
* Always pull the latest from main, BEFORE you open a PR

Before opening a PR:

1). Checkout the main branch
2). Pull the latest
    * If `git pull` fails due to conflicts, stash your changes `git stash` 
3). Checkout your personal branch
4). `git merge main`: takes changes that your teammates have done and adds it to your branch
5). Resolve merge conflicts in VS Code
6). If you stashed your changes, reapply them `git stash apply`
7). Push changes to your branch
8). Open PR

When VS Code requires a merge conflict to be resolved, and a
version of a file must be chosen (incoming vs current), use
Cmd + Shift + P to select which you want to select





