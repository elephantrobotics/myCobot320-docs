require(["gitbook", "jQuery"], function (gitbook, $) {
  /*
    "password": {
        "model": global,
        "settings": {
            "password": ...,
            "bg-img": ...,
        }
    }
    // or
    "password": {
        "model": [chapter, file],
        "settings": {
            "<name>": {
                "password": ...,
                "bg-img": ...,
            }
        }
    }
   */
  // Init configuration at start
  gitbook.events.bind("start", function (e, config) {
    let password = config.password;
    // console.log("ps:", password);

    let model = password.model;
    if (model == undefined) {
      gitbook.storage.set("password@model__", "none");
    } else {
      gitbook.storage.set("password@model__", model);
    }
    gitbook.storage.set("password@settings__", password.settings);
  });

  gitbook.events.on("page.change", function () {
    // Detect model and process.
    let model = gitbook.storage.get("password@model__");
    switch (model) {
      case "global":
        globalProcess();
        break;
      case "chapter":
        chapterProcess();
        break;
      case "file":
        fileProcess();
        break;
      default:
        $(".book").show();
    }
  });

  function globalProcess() {
    if (gitbook.storage.get("password@settings@global") == true) {
      $(".book").show();
    } else {
      login("global", gitbook.storage.get("password@settings__"));
    }
  }

  function chapterProcess() {
    let fp = gitbook.page.getState().filepath;
    let chapter = fp.split("/")[0] // TODO: How to judge chapters?
    if (gitbook.storage.get(`password@settings@${chapter}`) == true) {
      $(".book").show();
    } else {
      let setting = gitbook.storage.get("password@settings__")[chapter];
      login(chapter, setting);
    }
  }

  function fileProcess() {
    let fp = gitbook.page.getState().filepath;
    if (gitbook.storage.get(`password@settings@${fp}`) == true) {
      $(".book").show();
    } else {
      let setting = gitbook.storage.get("password@settings__")[fp];
      login(fp, setting);
    }
  }

  function login(key, setting) {
    if (setting == undefined) {
      $(".book").show();
      return;
    }

    let ps = setting['password'];
    if (ps == undefined || ps == '') {
      $(".book").show();
      return;
    }

    let bgImg = setting['bg-img'];
    if (bgImg == undefined || bgImg == '') {
      bgImg = "https://cn.bing.com/th?id=OHR.OtterCreekVT_EN-CN6409944679_UHD.jpg";
    } else {
      if (!new RegExp(/^(http|\w:|\/)/).test(bgImg)) { // Is it absolute address.
        // TODO: may not good way.
        bgImg = `../../../${bgImg.trim()}`
      }
    }

    let enter_password_modal = [
      `<div class="modal" tabindex="-1" role="dialog" style="background-image: url(${bgImg})">`,
      '<div class="modal-dialog-centered" role="document">',
      '<form class="form-inline">',
      '<div class="form-group mx-sm-3 mb-2">',
      '<label for="inputPassword" class="sr-only">Password</label>',
      '<input type="password" class="form-control" id="inputPassword" placeholder="Password">',
      "</div>",
      '<button type="submit" class="btn btn-dark mx-sm-3 mb-2">Submit</button>',
      "</form>",
      "</div>",
      "</div>",
    ].join("");

    $("body").append(enter_password_modal);
    // $('.modal').modal({ backdrop: "static" })

    $("form").submit(function (event) {
      event.preventDefault();
      let password = $("#inputPassword").val();
      if (password == undefined || password == "") {
        alert("Please input password！");
        return;
      }
      if (password == ps) {
        //$('.modal').modal('hide');
        $(".book").show();
        $(".modal").remove();
        gitbook.storage.set(`password@settings@${key}`, true);
      } else {
        alert("Password error!");
      }
    });
  }
});
