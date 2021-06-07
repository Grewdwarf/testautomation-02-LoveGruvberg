npm init -y
Wrote to /Users/Grooveberg/Documents/lecture-cy-request-pt1/package.json:

npm install cypress --save-dev

inside package.json, replace
"test": "echo \"Error: no test specified\" && exit 1"
with
"test": "cypress open"

Ran into problem that was solved by deleting package-lock.json and node_modules -> and then re-typing 'npm install'
( https://stackoverflow.com/questions/66775824/error-enoent-no-such-file-or-directory-stat-c-users-username-documents-my-m )
