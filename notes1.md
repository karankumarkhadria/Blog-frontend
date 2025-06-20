// jab bhi ham koi enviroment variables banaye to vo project ke root me hona chahiye project ka root vhan pe hi hota hai jhan par package.json and README.md files hoti hai

// iss enviroment variable ko github me ya production me ha shift nhi karte hai instead ham usse gitignore me daal sakte hai

// ye saare variable ki hamko bhi jarurat hoti hai isliye ham ek sample env file(.env.sample) banayenge jisme saare variables rakhenge bus unki value empty rakhenge and iss file ko ham github pe ship karenge

// inn variables ko access karne ke liye ham app.jsx me function ke andar likhte h console.log(process.env.NAME_OF_VARIABLE)

// usually enviroment variable file sirf ek baar chalti hai to agar koi change hota hai usme to project ko band karke vapas chalana padta hai

// hamara app vite se bana hai to ham REACT_APP se variable ka naam chalu karne ke bajaye VITE_ se chalu karenge or usko access console.loh(import.meta.env.NAME_OF_VARIABLE) se karenge

// appwrite project ke api end point ko ham VITE_APPWRITE_URL env variable me daalenge and project id ko VITE_APPWRITE_PROJECT_ID me daalenge and database collection banakar unki id nhi unke respective variable me daal denge

// collections ki setting me hame update permission bhi daalna hota hai

// database me ham kuch attributes banayenge and index status banayenge

// bucketId hame storage se milti hai

// buckets me bhi update permission dalni hoti hai

// make sure karne ke liye ki saare variables string me ho isliye ham ek conf folder me conf.js me sare variables ko stringify karte hai

