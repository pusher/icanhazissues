var issues = [
  {
    "pull_request": {
      "diff_url": "https://github.com/pusher/pusher-server/pull/71.diff",
      "patch_url": "https://github.com/pusher/pusher-server/pull/71.patch",
      "html_url": "https://github.com/pusher/pusher-server/pull/71"
    },
    "labels": [

    ],
    "title": "Added note for Max to fill in email content.",
    "created_at": "2011-11-24T16:24:54Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/71",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": null,
    "updated_at": "2011-11-24T16:24:54Z",
    "number": 71,
    "closed_at": null,
    "id": 2343138,
    "body": "Hi Max,\r\n\r\nCan you write some email copy for the new and inactive guys? Once you've done that, you can start spamming those mothers.\r\n",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/71"
  },
  {
    "pull_request": {
      "diff_url": "https://github.com/pusher/pusher-server/pull/70.diff",
      "patch_url": "https://github.com/pusher/pusher-server/pull/70.patch",
      "html_url": "https://github.com/pusher/pusher-server/pull/70"
    },
    "labels": [

    ],
    "title": "Redis slaving and a new transactional API",
    "created_at": "2011-11-24T14:52:55Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/70",
    "user": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "assignee": null,
    "updated_at": "2011-11-24T14:56:41Z",
    "number": 70,
    "closed_at": null,
    "id": 2342127,
    "body": "This branch brings synchronous transactions and the ability to use a different redis connection for slave and master usage (though there currently isn't configuration to setup to instantiate a separate redis slave connection).\r\n\r\nIt fixes the current problem where transactions may interfere with each other and it also fixes the problem where every live set/hash has it's own redis connection whilst initializing.\r\n\r\nThe related issue is https://github.com/pusher/pusher-server/issues/47",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/70"
  },
  {
    "pull_request": {
      "diff_url": "https://github.com/pusher/pusher-server/pull/69.diff",
      "patch_url": "https://github.com/pusher/pusher-server/pull/69.patch",
      "html_url": "https://github.com/pusher/pusher-server/pull/69"
    },
    "labels": [

    ],
    "title": "Release web hooks",
    "created_at": "2011-11-24T12:55:17Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/69",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": null,
    "updated_at": "2011-11-24T12:55:17Z",
    "number": 69,
    "closed_at": null,
    "id": 2341238,
    "body": "",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/69"
  },
  {
    "pull_request": {
      "diff_url": "https://github.com/pusher/pusher-server/pull/68.diff",
      "patch_url": "https://github.com/pusher/pusher-server/pull/68.patch",
      "html_url": "https://github.com/pusher/pusher-server/pull/68"
    },
    "labels": [

    ],
    "title": "Sender fix",
    "created_at": "2011-11-23T12:57:57Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/68",
    "user": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "assignee": null,
    "updated_at": "2011-11-23T14:02:03Z",
    "number": 68,
    "closed_at": null,
    "id": 2329360,
    "body": "I've tried this on staging and it stops the sender from crashing.",
    "comments": 4,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/68"
  },
  {
    "pull_request": {
      "diff_url": "https://github.com/pusher/pusher-server/pull/66.diff",
      "patch_url": "https://github.com/pusher/pusher-server/pull/66.patch",
      "html_url": "https://github.com/pusher/pusher-server/pull/66"
    },
    "labels": [

    ],
    "title": "1 operation == 1 transaction",
    "created_at": "2011-11-23T11:17:46Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/66",
    "user": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "assignee": null,
    "updated_at": "2011-11-23T11:17:46Z",
    "number": 66,
    "closed_at": null,
    "id": 2328622,
    "body": "I think we should favour doing complete operations as single transactions, what does everyone else think?",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/66"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Development",
        "name": "Development",
        "color": "ededed"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Blocked",
        "name": "Blocked",
        "color": "444444"
      }
    ],
    "title": "Make read only kanban board",
    "created_at": "2011-11-22T15:25:01Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/65",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "updated_at": "2011-11-22T15:26:02Z",
    "number": 65,
    "closed_at": null,
    "id": 2318983,
    "body": "",
    "comments": 0,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/65"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [

    ],
    "title": "Run pipe on production",
    "created_at": "2011-11-22T14:58:58Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/64",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": null,
    "updated_at": "2011-11-22T14:58:58Z",
    "number": 64,
    "closed_at": null,
    "id": 2318696,
    "body": "* Review code\r\n* Merge code\r\n* Configure\r\n* Deploy",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/64"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Bug",
        "name": "Bug",
        "color": "e10c02"
      }
    ],
    "title": "Sender stops sending",
    "created_at": "2011-11-21T16:11:57Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/62",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": null,
    "updated_at": "2011-11-21T16:13:20Z",
    "number": 62,
    "closed_at": null,
    "id": 2306161,
    "body": "Sometimes the hooker sender seems to just stop sending.  It logs no exceptions, either about failed sends or, as far as I can tell, when the sending stops.  A restart fixes the problem for now.",
    "comments": 1,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/62"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Pending+Release",
        "name": "Pending Release",
        "color": "02d7e1"
      }
    ],
    "title": "[pusher-js] Subscribe success and error callbacks",
    "created_at": "2011-11-18T17:40:29Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/58",
    "user": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "assignee": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "updated_at": "2011-11-18T17:40:39Z",
    "number": 58,
    "closed_at": null,
    "id": 2282573,
    "body": "See: https://github.com/pusher/pusher-server/pull/53",
    "comments": 0,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/58"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [

    ],
    "title": "[pusher-pipe] Compare UUID modules for client.",
    "created_at": "2011-11-18T17:21:22Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/57",
    "user": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "assignee": null,
    "updated_at": "2011-11-18T17:22:49Z",
    "number": 57,
    "closed_at": null,
    "id": 2282387,
    "body": "We currently use node-uuid, but should look at / compare it with uuid: https://github.com/broofa/node-uuid\r\n\r\nWe want to optimise for speed and uniqueness.",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/57"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [

    ],
    "title": "Spike investigate keep alive conn between sender and wh endpoints",
    "created_at": "2011-11-18T16:33:28Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/56",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": null,
    "updated_at": "2011-11-18T16:33:28Z",
    "number": 56,
    "closed_at": null,
    "id": 2281828,
    "body": "",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/56"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [

    ],
    "title": "Send WH data wrapped in array",
    "created_at": "2011-11-18T16:31:00Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/54",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "updated_at": "2011-11-23T19:01:59Z",
    "number": 54,
    "closed_at": null,
    "id": 2281795,
    "body": "",
    "comments": 3,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/54"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Done",
        "name": "Done",
        "color": "ededed"
      }
    ],
    "title": "[pusher-pipe] Trigger events without data",
    "created_at": "2011-11-16T16:10:14Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/51",
    "user": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "assignee": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "updated_at": "2011-11-24T13:33:26Z",
    "number": 51,
    "closed_at": null,
    "id": 2258077,
    "body": "Estimation: 1 day\r\n\r\nCurrently if you try to trigger an event on the pipe without data you get back an error. There is a bit of a case for supporting the triggering of events on a connection without data.",
    "comments": 2,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/51"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Blocked",
        "name": "Blocked",
        "color": "444444"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      }
    ],
    "title": "Count web hooks",
    "created_at": "2011-11-11T15:57:36Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/49",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": null,
    "updated_at": "2011-11-22T14:36:18Z",
    "number": 49,
    "closed_at": null,
    "id": 2210598,
    "body": "",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/49"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      }
    ],
    "title": "Redis changes required for multi AZ deployment",
    "created_at": "2011-11-11T09:31:39Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/47",
    "user": {
      "login": "mloughran",
      "url": "https://api.github.com/users/mloughran",
      "avatar_url": "https://secure.gravatar.com/avatar/620734cfa78f4d78e4837cb0e56ccd32?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "620734cfa78f4d78e4837cb0e56ccd32",
      "id": 214
    },
    "assignee": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "updated_at": "2011-11-17T20:31:08Z",
    "number": 47,
    "closed_at": null,
    "id": 2207756,
    "body": "Note: this is only concerned with storage, let's handle messaging separately\r\n\r\nIn order to scale Pusher across multiple availability zones and regions, we need to to able to separate operations that need to go to the global master from operations against the slave\r\n\r\nTerminology\r\n\r\n* Master - the global master redis node\r\n* Slave - the active slaves used for read operation\r\n* Backup - inactive slaves which we will failover to if required\r\n\r\n### Separate master a slave redis calls\r\n\r\nFor now we can forget about the backup - we'll decide later how to configure and failover to these. For now, we just need to separate the operations so that as many as possible are directed at the slave.\r\n\r\nObviously all write operations should be directed at the master. Most read operations should be fine against the read slave - for example things like token lookup. The principle is that these operations are quite happy to use eventually consistent state. Some of the operations concerning presence and the transactions probably mean read operations against the master node.\r\n\r\nWe can probably do something simple like\r\n\r\n    PusherServer.redis_master\r\n    PusherServer.redis_slave\r\n\r\nI don't see a way to make testing this eventual consistency tractable, so let's keep the master and slave the same for the test config (and local config).\r\n\r\n### Interface for making multiple concurrent transactions safe\r\n\r\nRather than creating a complex connection pool, let's just wait for a connection to become available\r\n\r\n    redis.lock {\r\n      # do stuff\r\n      # When we call exec or unlock the lock is released\r\n    }\r\n\r\nOther operations can take place against the redis client while the lock is in effect of course - but this guards against multiple transactions.\r\n\r\n### Remove the sync redis client from the pusher server\r\n\r\nWe can just make the `redis_sync` calls provide a fibered (synchronous looking) interface to the async redis master.\r\n",
    "comments": 8,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/47"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [

    ],
    "title": "Detect the failure of socket processes and clean up redis state",
    "created_at": "2011-10-28T11:18:59Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/42",
    "user": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "assignee": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "updated_at": "2011-11-11T15:55:46Z",
    "number": 42,
    "closed_at": null,
    "id": 2077680,
    "body": "This involves connecting to zookeeper within the socket processes and then creating an ephemeral file. I imagine that this would happen before the event loop is started. The ephemeral file should be at \"/socket_processes/#{process id}\".\r\n\r\nThe process should exit if the zookeeper session is going to expire. This involves setting a timeout for 8 seconds (the session actually expires after 10 seconds so there's a 2 second margin for error) when the zookeeper connection is lost and cancelling this timeout when the connection is regained. If the timeout fires, the process should close.\r\n\r\nThen in the lbmonitor process, (that will have to be renamed), the leader should detect the failure of the processes using the group watcher and when a node is detected as down it should clean up it's state in redis using a synchronous client.\r\n\r\nBoth the channel existence and presence state should be cleaned up. The channel existence cleanup function is asynchronous and so will have to be rewritten. The presence state cleanup function is [where?].\r\n\r\n",
    "comments": 1,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/42"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [

    ],
    "title": "Pusher-js: Added support for sending CSRF tokens via Authorizors",
    "created_at": "2011-10-27T17:25:13Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/41",
    "user": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "assignee": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "updated_at": "2011-11-16T13:11:03Z",
    "number": 41,
    "closed_at": null,
    "id": 2070431,
    "body": "",
    "comments": 1,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/41"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Pending+Release",
        "name": "Pending Release",
        "color": "02d7e1"
      }
    ],
    "title": "Make `rake sync` task sync across all addon state (including configs) from mysql to redis",
    "created_at": "2011-10-27T17:01:51Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/40",
    "user": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "assignee": {
      "login": "maryrosecook",
      "url": "https://api.github.com/users/maryrosecook",
      "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
      "id": 2716
    },
    "updated_at": "2011-11-11T15:55:55Z",
    "number": 40,
    "closed_at": null,
    "id": 2070181,
    "body": "",
    "comments": 3,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/40"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Waiting",
        "name": "Waiting",
        "color": "FFFFFF"
      }
    ],
    "title": "Increasing logging in LB monitoring stuff",
    "created_at": "2011-10-27T11:00:19Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/38",
    "user": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "assignee": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "updated_at": "2011-11-23T13:50:37Z",
    "number": 38,
    "closed_at": null,
    "id": 2066620,
    "body": "* Add logging to the lbprocess when the zookeeper connection state changes. ",
    "comments": 0,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/38"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Improvement",
        "name": "Improvement",
        "color": "02e10c"
      }
    ],
    "title": "Pusher-js: Pusher constructor should check arguments",
    "created_at": "2011-10-26T14:17:26Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/37",
    "user": {
      "login": "leggetter",
      "url": "https://api.github.com/users/leggetter",
      "avatar_url": "https://secure.gravatar.com/avatar/ecc56977271e781991b6172c16248459?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "ecc56977271e781991b6172c16248459",
      "id": 328367
    },
    "assignee": null,
    "updated_at": "2011-10-26T14:17:26Z",
    "number": 37,
    "closed_at": null,
    "id": 2057068,
    "body": "If a user creates a `Pusher` instance without passing in any arguments there are no errors thrown or error messages logged.\r\n\r\n    var pusher = new Pusher();\r\n\r\nThe only thing the developer will know is that the connection fails. It does so because no `app_key` is supplied in the WebSocket connection URL.\r\n\r\nI know this is a silly developer mistake to make but that's why it would be great if we could check the `appKey` argument and either log an error or throw an error. We recently had a support call related to this.",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/37"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Bug",
        "name": "Bug",
        "color": "e10c02"
      }
    ],
    "title": "Concurrent transactions are producing errors",
    "created_at": "2011-10-26T12:06:28Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/35",
    "user": {
      "login": "DanielWaterworth",
      "url": "https://api.github.com/users/DanielWaterworth",
      "avatar_url": "https://secure.gravatar.com/avatar/c06820015f0111921db60c8942ec1798?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "c06820015f0111921db60c8942ec1798",
      "id": 663767
    },
    "assignee": null,
    "updated_at": "2011-10-26T12:06:28Z",
    "number": 35,
    "closed_at": null,
    "id": 2055948,
    "body": "",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/35"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Bug",
        "name": "Bug",
        "color": "e10c02"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Pending+Release",
        "name": "Pending Release",
        "color": "02d7e1"
      }
    ],
    "title": "Fix version check in Socket Servers",
    "created_at": "2011-10-26T11:35:31Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/34",
    "user": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "assignee": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "updated_at": "2011-11-11T15:56:10Z",
    "number": 34,
    "closed_at": null,
    "id": 2055763,
    "body": "At present if the javascript identifies as something like 1.10.1-pre, then the socket servers incorrectly think that the javascript is of a version < 1.4.2, this is due to a string comparison error.",
    "comments": 1,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/34"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Bug",
        "name": "Bug",
        "color": "e10c02"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Blocked",
        "name": "Blocked",
        "color": "444444"
      }
    ],
    "title": "\"Websocket is closed before the connection is established\" error",
    "created_at": "2011-10-26T08:11:35Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/33",
    "user": {
      "login": "leggetter",
      "url": "https://api.github.com/users/leggetter",
      "avatar_url": "https://secure.gravatar.com/avatar/ecc56977271e781991b6172c16248459?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "ecc56977271e781991b6172c16248459",
      "id": 328367
    },
    "assignee": null,
    "updated_at": "2011-10-27T12:18:56Z",
    "number": 33,
    "closed_at": null,
    "id": 2054312,
    "body": "This error is logged to the JS console when attempting to connect. Our library eventually connects but we obviously don't want errors logged to the console when we should be handling something like this.\r\n\r\nA quick Google seems to suggest socket.io had this and fixed it:\r\nhttps://github.com/LearnBoost/socket.io/issues/439\r\n\r\nThis has been reported in 4 separate support calls.",
    "comments": 3,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/33"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Bug",
        "name": "Bug",
        "color": "e10c02"
      }
    ],
    "title": "Firefox back button reconnect bug",
    "created_at": "2011-10-25T15:42:14Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/31",
    "user": {
      "login": "mloughran",
      "url": "https://api.github.com/users/mloughran",
      "avatar_url": "https://secure.gravatar.com/avatar/620734cfa78f4d78e4837cb0e56ccd32?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "620734cfa78f4d78e4837cb0e56ccd32",
      "id": 214
    },
    "assignee": null,
    "updated_at": "2011-11-22T14:44:32Z",
    "number": 31,
    "closed_at": null,
    "id": 2046338,
    "body": "This issue affects the flash fallback - therefore this issue does not exist in Firefox 6.\r\n\r\nSteps to reproduce\r\n\r\n* Go to http://test.pusher.com/1.9.4\r\n* Click on \"Pusher test application\"\r\n* Click the back button in the browser\r\n\r\nThe page will say that it's connected, but when you \"say hello\" you won't receive the message. It doesn't actually have a connection, but the page is just showing it's state from the cache.",
    "comments": 0,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/31"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Blocked",
        "name": "Blocked",
        "color": "444444"
      }
    ],
    "title": "Release Webhooks",
    "created_at": "2011-10-25T13:46:31Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/30",
    "user": {
      "login": "mloughran",
      "url": "https://api.github.com/users/mloughran",
      "avatar_url": "https://secure.gravatar.com/avatar/620734cfa78f4d78e4837cb0e56ccd32?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "620734cfa78f4d78e4837cb0e56ccd32",
      "id": 214
    },
    "assignee": null,
    "updated_at": "2011-11-11T15:56:39Z",
    "number": 30,
    "closed_at": null,
    "id": 2045071,
    "body": "* Release new pusher-gem version with hooker support\r\n  * Blocked on Martyn to decide how this should work\r\n\r\n* Decide where the addon, hooker, and sender processes should run, and how redundancy should be achieved\r\n  * Blocked on Martyn to decide how this should work\r\n\r\nDone\r\n--------\r\n\r\n* Change web hook format to be a single level - `{:event => 'channel_occupied', :channel => 'foo'}`\r\n\r\n* Refactor enable_app and disable_app\r\n\r\n* Refactor web hook data storage code.\r\n\r\n* UI - can it be a bit clearer about what channel existence means - maybe some example of it's use?\r\n\r\n* Web hook docs",
    "comments": 2,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/30"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Blocked",
        "name": "Blocked",
        "color": "444444"
      }
    ],
    "title": "Record stats for Pipe",
    "created_at": "2011-10-18T23:17:43Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/28",
    "user": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "assignee": null,
    "updated_at": "2011-10-19T10:53:57Z",
    "number": 28,
    "closed_at": null,
    "id": 1982898,
    "body": "We currently record no stats for the pipe, I would like to add the collection of stats for:\r\n\r\n- Pipe API requests\r\n- Socket (BackChannel) messages sent\r\n- Socket (BackChannel) messages received\r\n\r\nThe later two are quite important especially with SocketStream now experimenting with the pipe. Looking at the code to the current stats collection, it would appear that this task should be a fairly straight forward task.",
    "comments": 2,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/28"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      }
    ],
    "title": "Automated email to users who become active",
    "created_at": "2011-10-11T17:57:24Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/25",
    "user": {
      "login": "mloughran",
      "url": "https://api.github.com/users/mloughran",
      "avatar_url": "https://secure.gravatar.com/avatar/620734cfa78f4d78e4837cb0e56ccd32?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "620734cfa78f4d78e4837cb0e56ccd32",
      "id": 214
    },
    "assignee": null,
    "updated_at": "2011-11-23T18:33:38Z",
    "number": 25,
    "closed_at": null,
    "id": 1879076,
    "body": "So that we get better conversions and stop wasting time doing this manually.\r\n\r\n* Only send once\r\n* Use hourly cron to capture\r\n\r\nMax will add the text into this issue",
    "comments": 0,
    "milestone": {
      "open_issues": 12,
      "title": "2011-W45-46",
      "creator": {
        "login": "maryrosecook",
        "url": "https://api.github.com/users/maryrosecook",
        "avatar_url": "https://secure.gravatar.com/avatar/4fc0d13d7bbdbf5c075560c919db373e?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
        "gravatar_id": "4fc0d13d7bbdbf5c075560c919db373e",
        "id": 2716
      },
      "description": "",
      "created_at": "2011-11-11T15:55:02Z",
      "state": "open",
      "url": "https://api.github.com/repos/pusher/pusher-server/milestones/5",
      "due_on": "2011-11-29T08:00:00Z",
      "closed_issues": 7,
      "number": 5
    },
    "html_url": "https://github.com/pusher/pusher-server/issues/25"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      }
    ],
    "title": "API performance benchmarking",
    "created_at": "2011-10-11T17:56:04Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/24",
    "user": {
      "login": "mloughran",
      "url": "https://api.github.com/users/mloughran",
      "avatar_url": "https://secure.gravatar.com/avatar/620734cfa78f4d78e4837cb0e56ccd32?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "620734cfa78f4d78e4837cb0e56ccd32",
      "id": 214
    },
    "assignee": null,
    "updated_at": "2011-10-25T13:40:04Z",
    "number": 24,
    "closed_at": null,
    "id": 1879062,
    "body": "Runs against staging and benchmarking\r\n\r\nAt a given load measure the performance distribution. Ideally we could graph this so that we can see how the performance varies with increasing load.\r\n\r\nI'm particularly interested at the performance at the 99th percentile (or 95th percentile) - the issue we're having is with outlying timeouts not general slowness per se.\r\n\r\nCurrent graphs are available:\r\n\r\n* Sinatra http://ops.pusher.com/ganglia/graph.php?c=unspecified&h=ip-10-195-206-224.ec2.internal&v=9&m=API%20latency%20sinatra%20direct&r=day&z=medium&jr=&js=&st=1318272397&vl=ms&z=large&x=500\r\n* HAProxy http://ops.pusher.com/ganglia/graph.php?c=unspecified&h=ip-10-195-206-224.ec2.internal&v=8&m=API%20latency%20HAProxy&r=day&z=medium&jr=&js=&st=1318272397&vl=ms&z=large&x=500\r\n* ELB http://ops.pusher.com/ganglia/graph.php?c=unspecified&h=ip-10-195-206-224.ec2.internal&v=15&m=API%20latency%20ELB&r=day&z=medium&jr=&js=&st=1318272397&vl=ms&z=large&x=500\r\n\r\n(By the way I worked out how to get the graph axes consistent - see http://sourceforge.net/apps/trac/ganglia/wiki/web_get_vars)",
    "comments": 1,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/24"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Story",
        "name": "Story",
        "color": "0b02e1"
      }
    ],
    "title": "Detect failure of redis node",
    "created_at": "2011-10-11T17:50:09Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/23",
    "user": {
      "login": "mloughran",
      "url": "https://api.github.com/users/mloughran",
      "avatar_url": "https://secure.gravatar.com/avatar/620734cfa78f4d78e4837cb0e56ccd32?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "620734cfa78f4d78e4837cb0e56ccd32",
      "id": 214
    },
    "assignee": null,
    "updated_at": "2011-10-19T14:51:09Z",
    "number": 23,
    "closed_at": null,
    "id": 1878997,
    "body": "* Add zk epemeral file for each node\r\n* Monitor redis node ephemeral filure\r\n* On failure:\r\n** Propagate slave to master\r\n** Pick and configure new slave\r\n** Update config in zk for redis master",
    "comments": 0,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/23"
  },
  {
    "pull_request": {
      "diff_url": null,
      "patch_url": null,
      "html_url": null
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Bug",
        "name": "Bug",
        "color": "e10c02"
      },
      {
        "url": "https://api.github.com/repos/pusher/pusher-server/labels/Blocked",
        "name": "Blocked",
        "color": "444444"
      }
    ],
    "title": "Firefox makes 2 connections",
    "created_at": "2011-10-11T17:39:02Z",
    "state": "open",
    "url": "https://api.github.com/repos/pusher/pusher-server/issues/22",
    "user": {
      "login": "mloughran",
      "url": "https://api.github.com/users/mloughran",
      "avatar_url": "https://secure.gravatar.com/avatar/620734cfa78f4d78e4837cb0e56ccd32?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "620734cfa78f4d78e4837cb0e56ccd32",
      "id": 214
    },
    "assignee": {
      "login": "miksago",
      "url": "https://api.github.com/users/miksago",
      "avatar_url": "https://secure.gravatar.com/avatar/3300f69fcfb83589e73d86fcad57ff13?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png",
      "gravatar_id": "3300f69fcfb83589e73d86fcad57ff13",
      "id": 30827
    },
    "updated_at": "2011-11-22T14:46:49Z",
    "number": 22,
    "closed_at": null,
    "id": 1878902,
    "body": "",
    "comments": 1,
    "milestone": null,
    "html_url": "https://github.com/pusher/pusher-server/issues/22"
  }
]