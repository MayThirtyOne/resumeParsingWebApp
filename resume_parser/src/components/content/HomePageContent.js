
import { useAuth0 } from "@auth0/auth0-react";




function HomePageContent() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isAuthenticated) {
        const input = { email: user.email };
        const backendURL = "https://backend.rankresu.me/checkUser/";
        fetch(backendURL, {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    return (
        <div>
            <h1>Hello from Homepage!</h1>
        </div>
    )
}

export default HomePageContent
