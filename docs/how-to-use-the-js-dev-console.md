Learn the purpose of server utils and auto-import custom files
41:45
right all right now that we are finished discussing the server plugins let's start discussing the server utils so
41:52
server utils is usually um if you have a reusable function and you wanted to call it in your um inside your apis it's best
42:00
to store that in the utils folder okay so to do that um let's just simply create a new folder here and then let's
42:08
name it utils okay so let's close the plugins for now and then anything here
42:13
inside the utils folder are Auto imported okay so it auto imported out of the box okay so let's create a new file
42:21
and that will be um my function okay you can name
42:27
whatever you want but I'm going to name mine as my function okay so here
42:33
function my function okay and then let's just export
42:39
default my function okay and then here let's simply return hello I am
42:47
from utils all right so let's uh try and call that in the uh inside the API so
42:53
here in the test end point so remove the hello world and then change
42:59
it with the my function okay so in case um it's not Auto importing in your end
43:05
you might want to restart the um um the app and then your IDE okay so let's do
43:12
that so here I'm going to restart my IDE so yarn
43:22
Dev all right now once it is running let uh let
43:28
me remove the import here and it fixes the issue sometimes it won't work so you
43:34
need to um restart your IDE okay so just in case it won't work like restarting
43:40
your app and then restarting your Ida um the last option for that is to um
43:46
configure it inside the um KNX config okay so manually Auto manually
43:52
registering the Auto Import okay so to do that it's something like this this so Nitro so you are referencing um the
44:00
server folder so uh just like I mentioned before anything inside the server folder are powered by Nitro okay
44:07
so if you want if you want to reference inside the folder use Nitro and then here um
44:15
Imports okay and then inside the Imports is deers okay so deers stands for
44:23
directories okay and it will be an array okay so dot so the um root file and then
44:30
forward slash and then server and then the utils okay just like that so the
44:37
same thing if you also wanted to add a an Auto Import which is a custom uh folder here so for example um here um
44:46
let's say test you want to Auto Import um all the files inside the test folder
44:52
you can also do that okay so it will be something like this so um do then forward slash server and
45:00
then the test okay so let's actually do that so let's try that see if that works
45:06
so inside the test folder let's create a new file and let's say
45:12
testing. TS okay and then let's here let's just create a function so uh let's
45:17
name it let's name that um testing okay and then let's just
45:23
simply return um hello I am from testing okay and then let's
45:31
just simply export default um testing okay just like that so let's
45:40
uh try and call that inside the API so here um let's just remove that so we
45:46
know that our um the My function here is working or actually let's just run that first so just to make sure that it works
45:53
okay so here are so here's the um API test endpoint so that's this one okay so
46:02
send and as you can see it outputs the hello I am from utils which is um this
46:09
string right here okay so now we're going to um test the the file inside the
46:15
test folder so let's see if that works and let's also see if it Auto Imports it
46:20
okay so um return and that will be um
46:25
testing okay so if if it does not work you need to restart your
46:33
um app again so close that and then yarn
46:47
Dev all right and then let's close let's just close that and as you can see it
46:52
looks like it fixes the issue here so if I type here testing so it does not add
46:59
the um import here okay so it automatically um Imports that for us okay so let's test that so let's run the
47:06
API and as you can see it outputs the hello I am from testing okay so in case
47:13
you have a reusable function you can store that inside the utils folder or you can just um create your um or if you
47:20
want to create an Auto Import in one of the folder inside the server folder you can just
47:26
um use that here and then call that inside the um Dar here okay so if you
47:33
have any questions please let me know in the comment section below
Expore H3 and learn how to use H3 utils in the server
47:41
okay all right we are finally in our last topic and in this topic we're going to be discussing about um H3 okay so
47:48
what is H3 H3 is an is a minimal HTTP framework that powers Nitro and KNX uses
47:55
that under the hood okay so just uh take note that um H3 utilities are only going
48:00
to be available inside the um server folder okay so let's visit their um
48:06
documentation here so njs H3 okay so let's scroll down so as you can see they
48:12
have their installation guide here usage router and then the examples and then the um utilities okay
48:21
so um we're not going to be um discussing all of this because it's going to take a lot of time we're only
48:28
going to be focusing on the um the most common the most common utilities that is mostly used okay so that will be the uh
48:35
read body for example the um get query and then the get router params and then
48:41
the um what else here um get request URL and then um set response headers and
48:49
then um what else um the create error and I think you already know about the
48:54
create error so just in case you don't um we're going to be covering that up as well and then the um get cookie set
49:01
cookie and then the delete cookie okay so also here in the read body and then
49:07
the get query we're going to be um adding a um typings to that okay so we know what data to expect okay so let's
49:15
see that in action all right so let's uh do some examples so here I created a user folder
49:22
and then a sign up endpoint so the sign up is a post method okay and then here
49:28
in the postman so I tested that and it works okay so first um let's discuss
49:34
about read body so read body is useful when you um if you want to carry a message from the client and you want
49:41
that message to be in the server okay so to do that H body and then make sure to
49:47
await okay remember to await and then read body okay so inside the read body
49:53
it will be an event okay just like that and then let's also try to return that so here return the body and then let's
50:02
test that okay so let's open the postman and here if you are here in the pams just click the body and then select um
50:09
raw and then select Json okay and then here let's say for example um first name
50:17
is um say John and then last name
50:23
is do okay okay so we're going to be expecting this data in our uh return
50:30
here okay since we're going to be returning the um full body okay so back in the postman send that and as you can
50:37
see it outputs the first name and the last name okay and then here um if you hover the
50:45
um body as you can see it returns any okay so if you want to add some typings to that um let's just create an
50:52
interface here so interface interace and then let's say I body and
51:00
then the body will have a uh first name and that is a string and then last name
51:06
okay that is a string as well and then let's also add the email here okay just
51:12
to make it um realistic okay and then the password as well okay so
51:18
string just like that and then here to add that here let's just open close and
51:24
then um body okay and then the interface
51:29
okay so you are um adding an interface in the body okay and that will be the I
51:36
body okay so now if you hover the body it says instead of any it's now the
51:42
ibody so if I'm going to um put dot here okay as you can see um the suggestions
51:49
here are showing okay so but I'm going if I'm going to remove that okay just
51:55
just to show it to you just just to show it to you so body and if I type do it's
52:00
not going to suggest um anything here okay so revert that and
52:08
then okay just like that and if you also want do a um like a dist destructing
52:15
statement if I'm not mistaking if that's the term for that so you can also do that okay so if you going to press
52:22
control plus space it will show the a available um typ available U properties
52:28
okay so email first name last name okay so that's that let's let's actually try
52:36
that so here so I'm going to return the email okay so in the body I need to also
52:42
add the email okay so email and then example test gmail.com
52:50
okay we should be expecting that in our um result here okay so let's send that
52:56
and as you can see it outputs the um test gmail.com okay all right um just a
53:02
quick side note here um the read body will only going to work if um the method
53:07
here is post so if you're going to um use get the read body um utility is not
53:13
going to be working okay so let's actually test that so if I'm going to change that to get okay and then here in
53:21
the postman um change the method to get and then send as you can see um HTTP method
53:29
is not allowed okay so that means that um you can only use read body inside the
53:36
um if the method is post okay so post or I think you can also use in the put or
53:43
patch if I'm not mistaken so let's um also see that so save and
53:48
then um put and then send and it works
53:54
okay so I think it it will also work for the um patch method okay so
54:00
patch and then here patch okay so it
54:06
works okay so it is not going to work if the method is get
54:12
okay so let's revert that back to the post all right so just crash in five
54:19
times in the last let's just close that and then um let's test that again okay
54:26
so send as you can see it's working back again okay all right um our next topic
54:32
is going to be about the um read multiform data from H3 okay so um here
54:38
in the documentation so that's this one here so read multiform data is useful
54:45
when you um upload the files to the server so you can use that okay so to do
54:50
that here in the vs code so const files and then make sure to await and then
54:57
create multiart form data and then the event okay and also if you go into um
55:03
hover the files variable here it says that the output or it's going to um uh
55:10
return a multi-art data or undefined okay so to do that um let's run a for
55:16
each okay so files and then for each and then file okay just like that so if you
55:24
want want to um return the file name here for example so if you want to return the file name of the file um
55:30
let's just create a new uh variable first okay so result and then that will be an array actually it's an array of
55:38
string okay so here inside the uh for each Let's uh call the result variable
55:46
and then let's add an array okay so result push and then um the file name
55:53
okay so here uh um it says argument type string undefined is not assignable to
55:58
parameter type string so to fix that just add an exclamation there okay so
56:03
we're telling um typescript that um we know that the file name is a string okay
56:10
so here the result let's just um return that okay so
56:16
here in the postman open the postman and then um select so instead of raw select
56:22
um form data Okay so click on that and then here inside the um under key make
56:29
sure to make change the text to file okay and then here in the value click on
56:35
that and then new file from local machine okay and it will open up the um
56:40
um the tab here okay so let's say um we want to upload this one here so as you
56:46
can see it starts with Fox the file name and then click on that and then open and
56:52
then send and as you can see it outputs the uh file name including the um file
56:58
extension okay so if you want to learn more about the um how to upload files in the um in Knox you can um go to my um
57:06
channel here so I created a video for that so that's this one okay so don't
57:12
you can also um view this one but this one has a noisy background so I recommend um this
57:19
one um there's an ads but um that's the um title Okay so
57:26
back in the vs code so um that's the basic of the read multiart form data all
57:32
right our next H3 topic is going to be um get query okay so let's just comment
57:39
that for now and then here um let's do the uh very basic of the get query so
57:46
con um query and then get quy and then the event okay so you don't need to up
57:53
con con on okay so you don't need to add the a weight here all right so let's just
57:59
return that so query okay and then here in Postman so um click parms and then
58:08
the um key it will be um you can um use um any key you want but in my case it's
58:14
going to be an ID in this example okay and then let's also add a value here which is 1 2 3 and then send that okay
58:22
so as you can see it outputs the um key and then the value here okay so back in
58:27
the vs code so if you H the um const query so as you can see it it is unknown
58:35
okay so if you want to add a um typings to that you can go here and then um
58:40
comma and then query and then closing um curly brackets and then here let's just
58:47
say ID and that will be a string okay so now when you hover the uh query it says
58:53
ID here okay so query and then when you um click that or when you add when you
59:01
add that it's suggest the ID okay so let's um test that one okay so back in
59:08
the vs code when I send that it will output the 1 two 3 okay so that's how
59:14
you that's how you add um typings um in the query okay so just a quick side note
59:20
um if you're going to be wondering why I did not set number here I set string instead of number so usually the um
59:27
query parameters is always going to return U string even if the um value here even if the um value here is a
59:35
number okay all right our next H3 topic is going to be the get router forams
59:42
okay or the get router foram okay so there these two are the same the only difference is the other one is um
59:49
singular okay and you can also specify the um name of the parameter here okay so let's see that in action so back in
59:56
the vs code and I think we already created that under inside the um Dynamic
1:00:01
API route so which is this one here okay so let's
1:00:07
um create a new variable here and that will be params and then let's just copy
1:00:13
that and then paste okay and then let's just return the params okay and also I
1:00:20
would like to clarify something um get router params and get query are different okay so here um this is the
1:00:28
parameter so it's a dynamic API endpoint and then here in the um first tab here
1:00:35
so this is the um query okay um it starts with a question mark and then the
1:00:40
key and then equals the value okay so that's the different there
1:00:46
okay so back in the vs code so here let's just um actually let's test that
1:00:51
one make sure that it is working so one two three and as you can see it outputs
1:00:57
the ID of uh the parameter ID and then the uh one to three value okay that ID
1:01:03
will be this one here okay and also you can um another way to access that is
1:01:10
event context and then the params okay so that will work the same all right so
1:01:18
here if you want to specify the ID and it will
1:01:23
um context is possibly undefined okay so add an exclamation there and it will
1:01:31
fix the issue okay so back in the U Postman here send that and as you can
1:01:36
see it outputs the one two three which is this one here okay so now let's um
1:01:42
try the get router parm so get uh router
1:01:47
PM okay just like that and then the event okay and then the second parameter
1:01:53
so as you can see it here the first parameter is the event and then the second parameter is the string
1:01:59
okay so in this case it's an ID okay and then the third parameter oh that's
1:02:04
optional as um if you can if you see the question mark here that's optional okay
1:02:10
so here ID and then um proper variable naming so since we already specified
1:02:16
that it is an ID it's best to change the variable here to an ID as well okay and
1:02:22
then save that and then test and it outputs the 1 two 3 okay but if
1:02:28
you're going to not specify that or actually it's going to cause an error since it needs to be specified since
1:02:34
this is a get router param okay all right um our next H3 topic is
1:02:41
the um set response header okay so um in the vs code or in the documentation so
1:02:48
set response header which is this one here okay so we going we're going to learn the um basic usage for that so so
1:02:55
here just simply call the um set response header and then the first
1:03:01
parameter will be the event and then the second parameter will be the um the name
1:03:06
of the header and as you can see um these are the um suggestions of the uh
1:03:12
suggested headers here okay so for example authorization okay so there's a capital a capital um small a okay not uh
1:03:21
capital a small a okay so this time I'm going to uh where is it um what
1:03:29
happened um this time I'm going to select um capital A authorization okay
1:03:35
and then the third parameter is the value okay it's the value of the um header okay so for example 12 and then
1:03:43
send that or save that and then in the postman so send that and go to the
1:03:50
headers and as you can see it outputs the authorization and then 12 here so if
1:03:56
I'm going to change the value to 1 2 3 and then back in the vs code and then
1:04:02
send that and as you can see it outputs the 1 two 3 okay so next um it's going
1:04:08
to be the um create error so to do that um this is the um basic of it so create
1:04:16
error okay so here um um open curly um open closing brackets and then status
1:04:24
code so as you can see there's a status code and then there's a status message okay so status code that will be um a
1:04:31
number so that will be uh for example 500 and then um status message
1:04:38
um error in your API okay save that and
1:04:45
then back in the postman so um click body here okay so send that and um what
1:04:53
happen happen oh we are returning the um the testing here so um create error is
1:05:00
not going to um create an error as long as you did not return it okay so make sure to um return that okay so just like
1:05:09
that and then send and it will um output the error here okay the 500 which is the
1:05:16
status code this one and then the error message here okay so usually it will be
1:05:22
something like this so let's just um remove that and then it will be under a
1:05:27
uh TR catch and then the error will be um let's just um copy this one first
1:05:35
so copy that and then remove and then generate the TR
1:05:40
catch okay and then return the um when there's an error return the create error
1:05:47
and then if not return 200 okay so that's usually
1:05:53
like that okay all right we are now in the last topic of H3 so and that topic will be um
1:05:59
cookies okay so we're going to learn how to parse get set and delete okay so I'm
1:06:06
going to exclude the U split cookie string since I don't know how to use that and I haven't used that before okay
1:06:11
so um but usually it's um these four here okay so let's um do that so here in
1:06:17
the vs code here I'm using the um test API endpoint okay so first uh let's
1:06:24
let's do set cookie okay so to do that set cookie okay and then it will have three
1:06:31
parameters so the first parameter is the event okay which is uh this event here
1:06:37
and then the second parameter is the cookie name so for example uh let's just say cookie name okay and then the um
1:06:46
third parameter is the cookie value okay so cookie value right just like that so you
1:06:53
don't need to add a weight here all right so let's test that in Postman so
1:06:59
if you're in the body just click the cookies here okay so here in the cookies
1:07:04
if I'm going to send that and as you can see it outputs the cookie name and then
1:07:09
the cookie value okay and it's also you can also set that to um um example you
1:07:16
want to the HTTP only to true or secq to true you can also um configure that here
1:07:23
and that will be the um fourth parameter okay so it will be like this and then if
1:07:28
you um press contrl plus space it will output the um available uh properties
1:07:35
for us okay so H HTTP only to True okay and then for example you also wanted to
1:07:42
add an expiry date and then here it's going to be a um I think it's going to
1:07:48
be a date so new date for example okay and and then um I'm not sure how to do
1:07:57
um 30 days so but let's let's try it okay so new date and then new date and
1:08:04
then set I I think set date okay and then inside a set date
1:08:10
it's going to be a new date and then um after that let's H I
1:08:19
think it's get date if I'm not mistaken and then plus 30 okay so I did something like
1:08:28
this before like I will set an expiration to 30 days so I I did something like this before I just forgot
1:08:35
the syntax how to do it so um let's actually test that and see what happens
1:08:42
so here in the postman so send that oh it looks like it's working the only
1:08:49
difference is it's when the uh what
1:08:55
happened February 14 I think that works today is the oh
1:09:03
it's the 16th so it's not working but you get the point okay so you you uh you
1:09:08
can set the um expired date like this okay so let's just leave that like that
1:09:14
and then you can also set um same site here and and the available s same site
1:09:21
um value here okay just like that so let's just remove that and if you also
1:09:27
want to add another cookie again so um cookie name two for example and then the
1:09:33
value to two Okay so let's um send that one again and as you can see it adds the
1:09:40
another cookie here okay so just like that so if you wanted to um get the cookie for example you want to um like
1:09:49
get the um second cookie here so you just simply need to um do it like this
1:09:55
okay um this time's let's just return it okay so that will be um instead of set
1:10:00
cookie it will be get cookie okay and then there's an event and then the
1:10:06
second parameter here is the cooki name okay and that will be the cookie name
1:10:12
two which is this one okay so there no need for a third parameter so you only
1:10:17
need um two parameters here in the get cookie okay so you don't you also you don't need to um
1:10:24
add a weight here okay just like that and then test that in the postman and
1:10:30
then here um instead of cookies select body since we're going to be um returning the um cookie here okay so
1:10:38
send that and what happened uh cookie name to
1:10:44
oh that's incorrect okay so make sure that your cookie name matches the um
1:10:51
cookie name here or and the second parameter here okay so stand and as you
1:10:57
can see it outputs the cookie value to which is this one here okay so now let's
1:11:04
um start the um let's also try to parse the cookies so as you can see here in
1:11:09
the cookies we have um two cookies so if you're going to parse that it should return that in the OR it should return
1:11:16
um the cookies okay so the two cookies so let's do that so let's just remove
1:11:21
the get cookie so here and then par
1:11:27
cookies and then the event okay so you only have uh you only need one parameter
1:11:32
in the pars cookies okay so save that and then back to the postman and then
1:11:37
instead of cookies here select body okay so send and as you can see it outputs
1:11:44
the um all the available cookies inside here okay now let's um try to delete a cookie
1:11:52
so to do that that um let's just leave the pars cookies there and here let's
1:11:58
just do a um delete cookie so
1:12:04
delete cookie okay and then that delete cookie will have um two parameters so
1:12:10
the first one is the event and then the second parameter is the name of the cookie okay for example you want to
1:12:16
delete the cookie name to or the um let's just go back to the postman here
1:12:22
example you want to delete the first cookie so paste that here okay so you
1:12:28
don't need to add a weight here also okay so just like that so send
1:12:35
that and then if you go to the cookies it uh removes the cookies okay so you
1:12:40
only have um one cookie here okay so now if you're going to uh send that again it
1:12:46
outputs the um the the remaining cookies okay so that's how you um do cookies in
1:12:54
the server side okay so if you have any questions please let me know in the comments section
1:12:59
below all right you've gain some awesome insights and hands-on experience with the fundamentals of using nox API
Thank you
1:13:06
middleware plugins utils and Auto Imports plus the most common Ed H3
1:13:13
utilities now it's time to dive into building your dream API projects don't
1:13:18
forget to show us some love by liking and subscribing if you enjoy this content happy coding and stay safe
