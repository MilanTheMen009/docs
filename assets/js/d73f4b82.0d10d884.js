"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[558],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?n.createElement(b,l(l({ref:a},p),{},{components:t})):n.createElement(b,l({ref:a},p))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2296:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2},l="Database backups",i={unversionedId:"v1.x/Guides/backups",id:"v1.x/Guides/backups",isDocsHomePage:!1,title:"Database backups",description:'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.',source:"@site/docs/v1.x/Guides/backups.md",sourceDirName:"v1.x/Guides",slug:"/v1.x/Guides/backups",permalink:"/docs/v1.x/Guides/backups",editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/docs/v1.x/Guides/backups.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Creating a Package",permalink:"/docs/v1.x/Packages/creating-a-package"},next:{title:"Uninstallation",permalink:"/docs/v1.x/Guides/uninstallation"}},s=[{value:"How to back up",id:"how-to-back-up",children:[]},{value:"How to restore",id:"how-to-restore",children:[]},{value:"How to automatically backup",id:"how-to-automatically-backup",children:[]}],c={toc:s};function p(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"database-backups"},"Database backups"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.'))),(0,o.kt)("p",null,"All important data is stored in the database. This includes all servers, users, and other information.",(0,o.kt)("br",{parentName:"p"}),"\n","It's important to keep backups of your database to ensure that you can restore your panel if something goes wrong."),(0,o.kt)("h3",{id:"how-to-back-up"},"How to back up"),(0,o.kt)("p",null,"You can use MySQL dump to back up your database.",(0,o.kt)("br",{parentName:"p"}),"\n","This command will create a backup file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/controlpanel/")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysqldump -u root -p controlpanel > /var/www/controlpanel/backup.sql\n")),(0,o.kt)("h3",{id:"how-to-restore"},"How to restore"),(0,o.kt)("p",null,"To restore a backup, you need a fresh database. If you already have a database, you can use the following command to drop it."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Warning, this will delete all Controlpanel related data! Make sure your database is backed up before continuing."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mysql -u root -p controlpanel -e "DROP DATABASE controlpanel"\n')))),(0,o.kt)("p",null,"Then you can restore the backup. You can also restore the backup on any other new server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -u root -p\nCREATE DATABASE controlpanel;\nCREATE USER 'controlpaneluser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT ALL PRIVILEGES ON controlpanel.* TO 'controlpaneluser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nexit\nmysql -u root -p controlpanel < /var/www/controlpanel/backup.sql\n")),(0,o.kt)("h3",{id:"how-to-automatically-backup"},"How to automatically backup"),(0,o.kt)("p",null,"You can automatically back up your database every day at midnight, for example.\nFirst, create a read only user for the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/controlpanel/backups\nmysql -u root -p\nCREATE USER 'controlpanelbackupuser'@'127.0.0.1' IDENTIFIED BY 'USE_YOUR_OWN_PASSWORD';\nGRANT LOCK TABLES, SELECT ON controlpanel.* TO 'controlpanelbackupuser'@'127.0.0.1';\nFLUSH PRIVILEGES;\nexit\n")),(0,o.kt)("p",null,"Then create a cronjob to run the following command at midnight.\nRun ",(0,o.kt)("inlineCode",{parentName:"p"},"crontab -e")," and add the following line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"0 0 * * * mysqldump -u controlpanelbackupuser --password=<USE_YOUR_OWN_PASSWORD> --single-transaction --quick --lock-tables=false controlpanel > /var/www/controlpanel/backups-$(date +\\%F).sql\n")),(0,o.kt)("p",null,"This will create a backup at /var/www/controlpanel/backups-$(date +\\%F).sql every day at midnight.\nEvery file will have the date when it was made in the filename, so you can also resolve issues that happened a few days ago."))}p.isMDXComponent=!0}}]);