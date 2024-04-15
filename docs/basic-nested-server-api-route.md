# Ruta Anidada Básica de la API del Servidor

8.42

Learn how to create a nested API route

okay now that we know how to create a simple um Dynamic API route let's

proceed with the um nested route okay so here in the server folder and then inside the API folder let's create a new

folder so um we're not going to um we're not going to need this one so let's just

create a new folder here so let's name it um nested okay but you can name it

whatever you want and then inside the nested folder open closing brackets and

Then followed by or inside inside it it's three dots okay and then the file

extension which is DS okay and then here let's create a router so con router and

that will be create router okay then after that let's call the router so

router and Then followed by the um HTTP method so in this case or in our example

here it's get and then um slash and then let's say um test okay

and then the second parameter will be the Define event handler okay and then

event okay just like that and then let's simply return here um test

nested route okay and then after that let's export

default okay uh default okay and

then use base and then that will be the um API

and then the nested here so API and then

um nested and then the second parameter will be um router and then Handler okay

just like that and then save the file and then let's um open the postman here

so um change that to nested and then um

let's also add here the tests so the test that we created here so so send

that and that will output the test listed route so that's here okay and if

you also wanted to create a um post method here so for example um router and

then that will be post okay so router post for example and then um let's say

uh let's let's say we use the same um API endpoint so test and then

Define event handler and then that will be an event okay and then

return post nested route okay so back in the uh

Postman so instead of get so if I'm going to send that that will output the

test nested route which is the get here since our method is get but if I'm going

to um select post here and then send that it will output output the

uh post nested route which is this one here okay so the same thing for the um

put and Patch okay so let's see that in action so router um let's say put and then test

let's actually just copy this one okay and then change that to put and then

let's also change the uh text as well so remove that or actually just let's

just um change this one here to put okay and then same thing for the um

delete and then um delete okay and then back in the

um Postman here so post that will output the post listed

route so if I'm going to change that to put it output it outputs the put uh

nested route and if I'm going to send patch this it's not going to um output

anything since we don't we didn't we didn't specify that here so let's also add that okay for the sake of this um

tutorial so patch test and then patch okay and then in the postman

so send that and it'll output it will output the um patch nested route so same

thing for the um delete okay so if you want to add another route after the test

so let's just um add here another router and then um your HTTP method and that

will be um test and then um let's say a category okay

category and Then followed by the Define event handler Handler and then the

event okay and then let's return here um

category okay simple and then back in the

postman and here let's um what's the method here so get so after the test

slash category okay and since our method there is get let's change that to get

okay and then send that and that will output the um category here okay so same

thing when you add another um another end point here inside or next to the

category just the same process okay so that's how you um create a basic nested

API routes or server API
