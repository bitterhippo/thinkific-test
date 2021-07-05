##Notes.

###Date.

11:59 AM PST, Monday the 5th of July.

###Location of deployedapplication.

https://thinkific-test-bitterhippo.vercel.app/

### Time spent.

About 5 and a half hours without considering the time spent looking at pesky ReactJS controlled form documentation.

### Assumptions made.

None.

### Shortcuts/Compromises made.

1) API Key - In server/controllers/api, I didn't actually res.json({ APIKey: bycrypt(user._id_ }) or something analagous to this because I thought the email address would be enough without having to pull another variable off req.body.params.
2) Due to an issue with CORS (which I have solved in the past which is what makes this concession painful) I wasn't able to deploy the front-end.

### Stretch goals attempted.

A front-end that consumes the API is basically all there. It just needed a state management system like Redux to store the evaluated result of the API.Login module and then dynamic data binds would have enabled a "logged in" state.

### Instructions to run assignment locally.

I didn't create a seperate build folder to run both instances simulateously. This was just shor-sighted. NPM start and two seperate terminals (one in the /root and the other in /cient) will enable this to run.

### What did you not include in your solution that you want us to know about?

I can't think of anything that I didn't already mention.

### Other information about your submission that you feel it's important we know if applicable.

None.

### Your feedback on this technical challenge.

I used ReactJS in a while, as I've been primarily making apps in ReactNative. I broke a lot of code trying to use <Veiw><Text>... instead of just <Div>. The challenge was good though, pre-deployment and CORS-issues, it felt like great practice.
