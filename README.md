icanhazissues
=============

Teh kanban. Full of kitteh.

Deploy
------

Setup:
```
cat ~/.ssh/id_rsa.pub | ssh office1.pusher.com "sudo sshcommand acl-add dokku
YOUR_USER"
git remote add office dokku@office1.pusher.com:issuesplz
```

Deploy:
```
git push office master
```
