---
title: "{{ replace .Name "-" " " | title }}"
description: ""
date: {{ .Date }}
draft: false
---

![{{ replace .Name "-" " " | title }}]({{ .Name | urlize }}.jpg)
{ .img-fluid }
