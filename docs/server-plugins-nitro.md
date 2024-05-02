# Complementos del Servidor Nitro

31:46

Learn the basics of server plugins and nitro hooks

okay all right now that we are finished with uh server middleware we can start working on the uh plugins okay so to do

that um right click on the server folder and then then create a new folder and name it plugins okay so let's close the

um midle whe folder for now and then here in the plugins folder so anything inside the plugins folder will be

registered as nitro plugins okay so this allows us extending Nitros runtime and

for hooking into life cycle hook okay so you might be wondering what is um Nitro

so Nitro is a standalone package that you can use as web server and the people

behind it are also the people behind KNX okay so it is a open source typescript

framework to build Ultra fast web servers and it is open to anyone so in case or um if you want if you don't want

to use KNX and you um want to use Nitro as your web server you can use that okay

so just a quick side note here so anything inside the um server folder it's all powered by um Nitro okay so if

you want to learn more about um Nitro they have a website and um it's here okay so this is their

um website and they have a guide here and also if you want to um know the

difference between KNX and Nitro I recommend um Alexander Leer's channel search the um KNX versus Nitro okay so

back in the VSS code here in the plugins create a new file and that will be um test.ts for now

okay and then inside the file um let's do export d default and then

Define Nitro plugin okay and it will be a Nitro app okay and then let's just

console log the Nitro app for now okay so Nitro and then Nitro app all right so

let's go to the terminal so as you can see it outputs the um available Hooks

and then the H3 app and then the router and then some other um like a local call

local fetch capture error okay so let's try some examples and we'll be using a

hook inside the uh available inside the Nitro okay so to do that uh let's just

remove the console log and then um Nitro app so that's the Nitro app here so

Nitro app and Then followed by Hooks and then hook okay without the S and then

the um hook here okay so these are the available hooks inside the Nitro okay so

this time we will be um using the render HTML and then HTML okay and then event

all right just like that and then let's just um conso log the

um HTML rendered okay so and also we will

be adding a a Content inside the inside the body so the moment it it uh renders

the HTML let's add a a a content in the body okay so to do that it will be like

this so HTML so that's the HTML here okay so HTML and then a pen body and

then push okay so here um let's just say an H1 okay so that's our um HTML tag

there and then the content so I am from

plugin okay or let's say I am from Nitro all right just like that so let's test

that so inside the uh terminal here let's just um actually let's uh disable

the um error here that we that we throw so we're making sure that we're not throwing any errors okay so disable that

and then back in the um test plugin and then the terminal and then let's just um

terminate the for now and then run again okay and then let's open the um see as

you can see it here it says 401 and authorized so that's the um uh the

middle way here okay so now that we uh disable that and then if we

refresh okay it should display the um next welcome okay and then back in the

vs code and as you can see it renders the um the console log here in the um in

the plugin okay so that's this one and then if we go back to the browser and if

you scroll down as you can see um it says here I am from Nitro so that's the

um content that we create that we created here okay so let's just um close

this one and then let's temporarily remove the next welcome for now and then save that and then as you can see it

outputs the um I am from Nitro so inspect that and that is inside the body and it has

an H1 tag okay so if you want to manipulate manipulate the um rendered

HTML you can use this hook okay all right now that we know how to uh

manipulate the rendered HTML using the um Nitro hook um this time we will track

the um the user agent okay so to do that okay so Nitro app hooks so the same

process and this time instead of rendering HTML it will be uh render

response okay so here response and then

the event okay just like that so let's just

um console log the event for now so we can see what's inside the event okay so

back in the terminal and then let's just clear that and then

refresh and then back in The View vs code and as you can see we have here the

available um event okay so there's a u node Rec and then

rest and then there's also web context method and everything here okay so let's

just close that and then let's just um or actually let's just leave the or

let's just remove the console log okay to do that use the event and then it will be inside the node and then wreck

okay and then headers okay and then the um user agent

okay so let's just um put that inside the console log so console log user

agent okay so let's open the terminal again and then let's clear that okay so

and then refresh and as you can see it outputs

the um user head user um agent okay all right now that we know how to

use the basic um hooks or Nitro hooks this time um this is for the mongod DB

users so for example you want to connect your mongod DB in your KNX app so you

can do this so if you're going to use mongus so it will be something like this

so import so you're going to import the mongus so

mongus from mongus okay but um this um in this example it's

going to cause an error because um I don't have the mongus package installed but it's something like this and then

inside the um Define n plugin it's uh something like this so mongus and then

connect and then it will be um inside it it will be the um use runtime config and

then your URI okay so you need to configure that inside the uh um next

config okay so after that U let's just console log here so we're checking if um

the mongod DB connection is um successful so connected

to I miss spell the connected so connected to

DP okay so it's something like this okay that's pretty easy and if this

console log won't show up that means uh there's a problem with your connection all

right all right so that's it for the server plugins topic and I hope you learn something in this um tutorial okay

so if you want to learn more about Nitro um you can just um go to their website and here in the guides as you can see um

there are um examples here and there's also capturing errors okay and then um

the hook ones okay so here's the request and then the after response okay so if

you want to manipulate the before the response you can use before response okay and if you also want to manipulate

after response you can use the after response hook all right and also here in

the um next website so just go to the get started or actually

guide and then um going further all right and then the lifecycle hooks okay

so scroll down and then the server hooks and then click the U learn more about

available Nitro life cycle hooks okay so click that and these are the available

um life cycle hooks okay so hook name and then the arguments and then the description all

41:34
