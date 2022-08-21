import gcp from "../assets/svg/skills/gcp.svg";
import html from "../assets/svg/skills/html.svg";
import photoshop from "../assets/svg/skills/photoshop.svg";
import illustrator from "../assets/svg/skills/illustrator.svg";
import docker from "../assets/svg/skills/docker.svg";
import adobeXd from "../assets/svg/skills/adobe-xd.svg";
import afterEffects from "../assets/svg/skills/after-effects.svg";
import css from "../assets/svg/skills/css.svg";
import angular from "../assets/svg/skills/angular.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import nuxtJS from "../assets/svg/skills/nuxtJS.svg";
import react from "../assets/svg/skills/react.svg";
import svelte from "../assets/svg/skills/svelte.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import vue from "../assets/svg/skills/vue.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import bulma from "../assets/svg/skills/bulma.svg";
import capacitorjs from "../assets/svg/skills/capacitorjs.svg";
import coffeescript from "../assets/svg/skills/coffeescript.svg";
import memsql from "../assets/svg/skills/memsql.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";
import vuetifyjs from "../assets/svg/skills/vuetifyjs.svg";
import c from "../assets/svg/skills/c.svg";
import cplusplus from "../assets/svg/skills/cplusplus.svg";
import csharp from "../assets/svg/skills/csharp.svg";
import dart from "../assets/svg/skills/dart.svg";
import go from "../assets/svg/skills/go.svg";
import java from "../assets/svg/skills/java.svg";
import julia from "../assets/svg/skills/julia.svg";
import kotlin from "../assets/svg/skills/kotlin.svg";
import matlab from "../assets/svg/skills/matlab.svg";
import php from "../assets/svg/skills/php.svg";
import python from "../assets/svg/skills/python.svg";
import ruby from "../assets/svg/skills/ruby.svg";
import swift from "../assets/svg/skills/swift.svg";
import adobeaudition from "../assets/svg/skills/adobeaudition.svg";
import aws from "../assets/svg/skills/aws.svg";
import deno from "../assets/svg/skills/deno.svg";
import django from "../assets/svg/skills/django.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import gimp from "../assets/svg/skills/gimp.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import lightroom from "../assets/svg/skills/lightroom.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import nginx from "../assets/svg/skills/nginx.svg";
import numpy from "../assets/svg/skills/numpy.svg";
import opencv from "../assets/svg/skills/opencv.svg";
import premierepro from "../assets/svg/skills/premierepro.svg";
import pytorch from "../assets/svg/skills/pytorch.svg";
import selenium from "../assets/svg/skills/selenium.svg";
import strapi from "../assets/svg/skills/strapi.svg";
import tensorflow from "../assets/svg/skills/tensorflow.svg";
import webix from "../assets/svg/skills/webix.svg";
import wordpress from "../assets/svg/skills/wordpress.svg";

import azure from "../assets/svg/skills/azure.svg";
import blender from "../assets/svg/skills/blender.svg";
import fastify from "../assets/svg/skills/fastify.svg";
import figma from "../assets/svg/skills/figma.svg";
import flutter from "../assets/svg/skills/flutter.svg";
import haxe from "../assets/svg/skills/haxe.svg";
import ionic from "../assets/svg/skills/ionic.svg";
import markdown from "../assets/svg/skills/markdown.svg";
import microsoftoffice from "../assets/svg/skills/microsoftoffice.svg";
import picsart from "../assets/svg/skills/picsart.svg";
import sketch from "../assets/svg/skills/sketch.svg";
import unity from "../assets/svg/skills/unity.svg";
import wolframalpha from "../assets/svg/skills/wolframalpha.svg";

import canva from "../assets/svg/skills/canva.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "Material UI":
      return "data:image/png;base64,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";
    case "redis":
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ao5niOW1hFh2OElS0bvdSMMcO_3kQfEusA&usqp=CAU";
    case "typing":
      return "https://cdn.iconscout.com/icon/premium/png-64-thumb/typing-81-904677.png";
    case "netlify":
      return "https://cdn.iconscout.com/icon/free/png-64/netlify-3521601-2945045.png";
    case "jestjs":
      return "https://cdn.iconscout.com/icon/free/png-64/jest-3521517-2945020.png";
    case "nodejs":
      return "https://nodejs.org/static/images/logo.svg";
    case "redux":
      return "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg";
    case "cypress":
      return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F8908513%3Fs%3D400%26v%3D4&f=1&nofb=1";
    case "npm":
      return "https://avatars.githubusercontent.com/u/6078720?s=200&v=4";
    case "postman":
      return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpcrZ9EH4CdU%2Fhqdefault.jpg&f=1&nofb=1";
    case "express":
      return "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yv7m_gvWuVisBb3LFDWs1QAAAA%26pid%3DApi&f=1";
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};
