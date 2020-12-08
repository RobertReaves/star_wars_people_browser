const BASE_URL = "https://www.swapi.tech/api"

export const fetchPeople = async () => {
	try {
		const response = fetch(`${ BASE_URL }/people/`)
			.then( res => res.json() )
			.catch( e => console.error( e ) );
		return response;
	} catch ( e ) {
		console.log( "fetch big error:", e );
	}
}

export const fetchPerson = async ( id ) => {
	try {
		const response = fetch(`${ BASE_URL }/people/${ id }`)
			.then( res => res.json() )
			.catch( e => console.error( e ) );
		return response;
		// const response = await fetch(`${ BASE_URL }/people/${ id }`);
		// return await response.json().then( r => r );
	} catch ( e ) {
		console.log( "fetch big error:", e );
	}
}

export const fetchFilms = async ( id ) => {
	try {
		const response = fetch(`${ BASE_URL }/films/${ id }/`)
			.then( res => res.json() )
			.catch( e => console.error( e ) );
		return response;
	} catch ( e ) {
		console.log( "fetch big error:", e );
	}
}

export const searchPeople = async ( text ) => {
	try {
		const response = fetch(`${ BASE_URL }/people/?name=${ text }`)
			.then( res => res.json() )
			.catch( e => console.error( e ) );
		return response;
	} catch ( e ) {
		console.log( "fetch big error:", e );
	}
}