import { Revise } from "revise-sdk";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMmU4NzdjYy00OTA0LTQ4NDYtYWNkOS1lMDE3NzYyNmQ3MTYiLCJrZXkiOiJrOWtvMDQ4byIsImlhdCI6MTY1NzQzOTM0N30.S6EcKJKqxSk6djDNh-PCPrtfBew8yf6XtUQd6HZbJZI";
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {

	// write your code here
    const res = await revise.addCollection({name: 'revnft', uri: 'revnft'});
    console.log(res);

    await revise.addNFT({
        image: 'https://revise-testing.fra1.digitaloceanspaces.com/sample-collection/1.jpg',
        name: 'Star Lord',
        tokenId: '1',
        description: 'This is a test description'
      }, [
        {attack: "80"}, {color: "maroon"}, {stamina: "90"}
      ])
}