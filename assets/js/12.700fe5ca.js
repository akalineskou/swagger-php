(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{370:function(t,e,a){"use strict";a.r(e);var s=a(45),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Install with composer:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("composer")]),t._v(" require zircote/swagger-php\n")])])]),a("p",[t._v("Create a php file:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"vendor/autoload.php"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$openapi")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\OpenApi\\"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/path/to/project'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("header")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Content-Type: application/x-yaml'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$openapi")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toYaml")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("p",[t._v("Add annotations to your php files.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * @OA\\Info(title="My First API", version="0.1")\n */')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/**\n * @OA\\Get(\n *     path="/api/resource.json",\n *     @OA\\Response(response="200", description="An example resource")\n * )\n */')]),t._v("\n")])])]),a("p",[t._v("And view and interact with your API using "),a("a",{attrs:{href:"https://swagger.io/tools/swagger-ui/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger UI "),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[t._v("#")]),t._v(" Links")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/Getting-started.html"}},[t._v("Getting started guide")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://swagger.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenApi Documentation"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://swagger.io/specification/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenApi Specification"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/Migrating-to-v3.html"}},[t._v("Migration from 2.x to 3.x")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/zircote/swagger-php/tree/master/Examples",target:"_blank",rel:"noopener noreferrer"}},[t._v("Learn by example"),a("OutboundLink")],1),t._v(" lots of example of how to generate")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/Related-projects.html"}},[t._v("Related projects")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/zircote/swagger-php/tree/2.x/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger-php 2.x documentation"),a("OutboundLink")],1),t._v(" The docs for swagger-php v2")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/1.x/"}},[t._v("Swagger-php 1.x documentation")]),t._v(" The docs for swagger-php v1")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);