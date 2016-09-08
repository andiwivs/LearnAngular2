
You will need to install the latest version of NodeJS (Node 5.0+, then update npm 3.0+). See http://blog.npmjs.org/post/85484771375/how-to-install-npm and don't forget to update npm after updating Node!
npm install npm -g

REM check version
node -v
npm -v

You will also need to install TypeScript 2+ (RC works https://blogs.msdn.microsoft.com/typescript/2016/08/30/announcing-typescript-2-0-rc/)
npm install -g typescript@rc

From command prompt, navigate to APM/APM.Site folder, then run:
npm install

REM Visual Studio handles this automatically
npm start