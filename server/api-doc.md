# My Assets App Server
My Assets App is an application to manage your assets. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;

## RESTful endpoints
- `POST` /register
- `POST` /login
- `POST` /googlelogin
- `POST` /restaurant
- `GET` /restaurant
- `GET` /destinations
### POST /register

> Create new user

_Request Body_
```json
{
    "email": "string" ,
    "password": "string"
}
```

_Response (201 - create)_
```json
{
    "id": 1,
    "email": "string" ,
    "password": "string",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z"
}
```

_Response (500 - Internal Server Error)_

---

### POST /register

> Create new user

_Request Body_
```json
{
    "email": "string" ,
    "password": "string"
}
```

_Response (201 - create)_
```json
{
    "id": 1,
    "email": "string" ,
    "password": "string",
    "access_token": "string",
    "createdAt": "2020-03-20T07:15:12.149Z",
    "updatedAt": "2020-03-20T07:15:12.149Z"
}
```
_Response (401 - Unauthorized)_
```json
{
  "message": "Wrong email/password"
}
```
_Response (500 - Internal Server Error)_

---
### POST /googlelogin
> login via google account
_Response (201)_
```json
{
    "accesToken" : "<your access token>"
},
```

_Response (400 )_
```json
{
  "message": "error"
}
```

### POST /restaurant

> Create new restaurants

_Request Header_
```
{
  "access_token": "<your access token>"
}
```

_Request_
```json
[
    {
        "name": "BART - Bar at The Roof Top - Artotel Jakarta",
        "url": "https://www.zomato.com/jakarta/bart-bar-at-the-roof-top-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Artotel Jakarta, Lantai 7, Jl. Sunda No. 3, Thamrin, Jakarta",
        "cuisines": "Continental, Indonesian",
        "timings": "5 PM to 1 AM",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/b43/aae00ded01cd65da9b3fe951c9259b43_1457938325.jpg?output-format=webp",
        "phone": "021 31925888",
        "UserId": null,
    },
    {
        "name": "Sana Sini Restaurant - Pullman Jakarta Indonesia",
        "url": "https://www.zomato.com/jakarta/sana-sini-restaurant-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Pullman Jakarta Indonesia, Jl. M.H. Thamrin 59, Thamrin, Jakarta",
        "cuisines": "Japanese, Chinese, Western, Indonesian",
        "timings": "5:30 AM to 10:30 AM, 12 Noon to 3 PM, 6 PM to 10 PM (Mon-Fri), 5:30 AM to 11 AM, 12 Noon to 3 PM, 6 PM to 10 PM (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/2/7419572/61ac5ef7324e50ada4f2079cbb295555.jpg",
        "phone": "021 31921111, 021 3906444",
        "UserId": null
    },
    {
        "name": "Li Feng - Mandarin Oriental, Jakarta",
        "url": "https://www.zomato.com/jakarta/li-feng-mandarin-oriental-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Hotel Mandarin Oriental, Jakarta, Jl. M. H. Thamrin, Thamrin, Jakarta 10310",
        "cuisines": "Chinese, Dimsum",
        "timings": "11:30 AM to 2:30 PM, 6 PM to 9 PM (Mon-Fri), 11:30 AM to 3 PM, 6 PM to 9 PM (Sat), 11 AM to 3 PM, 6 PM to 9 PM (Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18346266_RESTAURANT_d48ca3d6d9c744a08668406d5a88e53f.jpg",
        "phone": "021 29938825",
        "UserId": null,
    },
    {
        "name": "KAUM Jakarta",
        "url": "https://www.zomato.com/jakarta/kaum-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Dr. Kusuma Atmaja No. 77-79, Thamrin, Jakarta",
        "cuisines": "Jawa",
        "timings": "11 AM – 12 Midnight (Mon-Thu), 11 AM – 12 Midnight, 12 Midnight – 1 AM (Fri-Sat), 8 AM – 9 PM (Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18524271_RESTAURANT_f8ff5394c9c4dfb09ceac6c931253431.jpg",
        "phone": "021 22393256, 0813 81715256",
        "UserId": null,
    },
    {
        "name": "JimBARan Lounge - AYANA Midplaza JAKARTA",
        "url": "https://www.zomato.com/jakarta/jimbaran-lounge-ayana-midplaza-jakarta-sudirman?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "AYANA Midplaza JAKARTA, Jl. Jend. Sudirman Kav. 10-11, Sudirman, Jakarta",
        "cuisines": "Asian",
        "timings": "10h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/1/7420051/eb321b2f9f40d2571754d40123420acf.jpg",
        "phone": "021 2510888",
        "UserId": null,
    },
    {
        "name": "Seasonal Tastes - The Westin Jakarta",
        "url": "https://www.zomato.com/seasonaltastes?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "The Westin Jakarta, Jl. H. R. Rasuna Said, Kuningan, Jakarta",
        "cuisines": "Indonesian, Indian, Western",
        "timings": "6h – 10h, 12h – 16h, 18h – 21h (Mon-Fri),6h – 10h 30m, 12h – 16h, 18h – 21h (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18368132_RESTAURANT_801c8c58979a4cb405bdc29138635188.jpg",
        "phone": "021 27887700, 021 27887768",
        "UserId": null,
    },
    {
        "name": "Henshin - The Westin Jakarta",
        "url": "https://www.zomato.com/henshin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "The Westin Jakarta, Lantai 67-69, Jl. H. R. Rasuna Said, Kuningan, Jakarta 12940",
        "cuisines": "Peruvian, Japanese",
        "timings": "Closed (Mon, Tue, Sun), 17h – 21h (Wed-Sat)",
        "photos": "https://b.zmtcdn.com/data/pictures/4/18368134/2338746e788a0b9531c94d1231f5e2f1.jpg",
        "phone": "021 27887768, 021 27887788",
        "UserId": null,
    },
    {
        "name": "OPEN Restaurant - DoubleTree by Hilton Jakarta Diponegoro",
        "url": "https://www.zomato.com/jakarta/open-restaurant-doubletree-by-hilton-jakarta-diponegoro-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "DoubleTree by Hilton Jakarta - Diponegoro, Jl. Pegangsaan Timur No. 17, Cikini - Menteng, Jakarta Pusat  10310",
        "cuisines": "European, Western, Asian",
        "timings": "6h – 22h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/1/7422631/19c0b3591aef42cbe86906e03fa12799.jpg?output-format=webp",
        "phone": "021 29857093, 021 31904433",
        "UserId": null,
    },
    {
        "name": "Tugu Kunstkring Paleis",
        "url": "https://www.zomato.com/jakarta/tugu-kunstkring-paleis-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Teuku Umar No. 1, Menteng, Jakarta",
        "cuisines": "Betawi, Jawa, Western, Indonesian",
        "timings": "11 AM to 9 PM",
        "photos": "https://b.zmtcdn.com/data/pictures/8/7404738/4db3a9cd4d7d96c8cf2849d5022619c5.jpg",
        "phone": "021 3900899, 0812 82400860",
        "UserId": null,
    },
    {
        "name": "The Japanese - Sari Pacific Jakarta",
        "url": "https://www.zomato.com/jakarta/the-japanese-sari-pacific-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Sari Pacific Hotel, Jl. M. H. Thamrin No. 6, Thamrin, Jakarta 10340",
        "cuisines": "Sushi, Ramen, Japanese",
        "timings": "11h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/7402859_RESTAURANT_54ddc55159c0fb0a363f16417161ecf8_c.jpg",
        "phone": "021 29932744",
        "UserId": null,
    },
    {

        "name": "Giyanti Coffee Roastery",
        "url": "https://www.zomato.com/jakarta/giyanti-coffee-roastery-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Surabaya No. 20, Cikini, Jakarta",
        "cuisines": "Coffee",
        "timings": "9 AM to 6 PM (Tue-Sat), Mon & Sun Closed",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/7b8/77f809569ed38bccab8c7807b3d3f7b8_1493640091.jpg",
        "phone": "021 31923698",
        "UserId": null,
    },
    {
        "name": "Arts Cafe - Raffles Jakarta",
        "url": "https://www.zomato.com/jakarta/arts-cafe-raffles-jakarta-karet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Raffles Jakarta, Jl. Prof. Dr. Satrio No. 3 - 5, Karet, Jakarta 12940",
        "cuisines": "Western, Dimsum",
        "timings": "7h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/0/7422160/faac7a2e63b85364761c05fd8cce47f3.jpg",
        "phone": "021 29880958",
        "UserId": null,
    },
    {
        "name": "Gelato Secrets",
        "url": "https://www.zomato.com/jakarta/gelato-secrets-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Shophaus, Lantai 1, Jl. Teuku Cik Ditiro No. 36, Menteng, Jakarta",
        "cuisines": "Ice Cream",
        "timings": "10 AM to 11 PM",
        "photos": "https://b.zmtcdn.com/data/pictures/chains/1/18421271/914edad203f5d0c779d70810f4d7bfca.jpg?output-format=webp",
        "phone": "0811 9451144",
        "UserId": null,
    },
    {
        "name": "Paradigma",
        "url": "https://www.zomato.com/jakarta/paradigma-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Pegangsaan Barat No. 4, Cikini, Jakarta",
        "cuisines": "Coffee, Indonesian",
        "timings": "11h – 24h (Mon-Fri),8h – 24h (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/7/18571667/0e6b4f983c2660c37fdf897bb97a75b1.jpg",
        "phone": "021 29924491",
        "UserId": null,
    },
    {
        "name": "Bandar Djakarta",
        "url": "https://www.zomato.com/jakarta/bandar-djakarta-ancol?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Taman Impian Jaya Ancol, Jl. Lodan Timur, Ancol, Jakarta 14430",
        "cuisines": "Seafood",
        "timings": "11h – 23h 30m (Mon-Fri),10h – 23h 45m (Sat),10h – 23h 30m (Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/chains/4/7411044/4c3c2fb7efdb5b1c3a565360e158c8ec.jpg?output-format=webp",
        "phone": "021 6455472, 021 6456554",
        "UserId": null,
    },
    {
        "name": "Cinnamon - Mandarin Oriental, Jakarta",
        "url": "https://www.zomato.com/jakarta/cinnamon-mandarin-oriental-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Hotel Mandarin Oriental, Jakarta, Jl. M. H. Thamrin, Thamrin, Jakarta",
        "cuisines": "Asian, Western",
        "timings": "6 AM to 9 PM",
        "photos": "https://b.zmtcdn.com/data/res_imagery/7401969_RESTAURANT_2601e2a7f0744a0546b5ba12064ce2a1.jpg",
        "phone": "021 29938823, 021 29938888",
        "UserId": null,
    },
    {
        "name": "Plataran Menteng",
        "url": "https://www.zomato.com/jakarta/plataran-menteng-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. HOS. Cokroaminoto No. 42, Menteng, Jakarta",
        "cuisines": "Indonesian",
        "timings": "11h – 23h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18478836_RESTAURANT_6c16faa66b2508661df58b05e2677930.jpg",
        "phone": "021 29627771, 0813 98908335, 0813 98908336",
        "UserId": null,
    },
    {
        "name": "Bunga Rampai",
        "url": "https://www.zomato.com/jakarta/bunga-rampai-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Teuku Cik Ditiro No. 35, Menteng, Jakarta",
        "cuisines": "Indonesian",
        "timings": "11h – 23h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/5/7410695/eb8f2537fc7572e4db71a2ba78c7ac57.jpg",
        "phone": "021 31926224, 021 31926225",
        "UserId": null,
    },
    {
        "name": "Kikugawa",
        "url": "https://www.zomato.com/jakarta/kikugawa-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Cikini 4 No. 13, Cikini, Jakarta",
        "cuisines": "Japanese, Sushi",
        "timings": "11h 30m – 15h, 17h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/07b/2f5a64aaae8f7c7ad625c9c1ba31c07b_1542531141.jpg?output-format=webp",
        "phone": "021 3150668, 021 31902413",
        "UserId": null,
    },
    {
        "name": "Nasi Goreng Kambing Kebon Sirih 1958 (Nasgorkam Bonsir 1958)",
        "url": "https://www.zomato.com/jakarta/nasi-goreng-kambing-kebon-sirih-1958-nasgorkam-bonsir-1958-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Kebon Sirih No.75, Menteng, Jakarta",
        "cuisines": "Jawa",
        "timings": "5 PM – 12 Midnight, 12 Midnight – 2 AM",
        "photos": "https://b.zmtcdn.com/data/pictures/0/7417570/98dad520e9c20829feef2d34380aa23d.jpg",
        "phone": "0811 190775, 0811 864011, 021 74702499",
        "UserId": null,
    }
]
```

_Response (201 - Created)_
```json
[
    {
        "id": 1,
        "name": "BART - Bar at The Roof Top - Artotel Jakarta",
        "url": "https://www.zomato.com/jakarta/bart-bar-at-the-roof-top-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Artotel Jakarta, Lantai 7, Jl. Sunda No. 3, Thamrin, Jakarta",
        "cuisines": "Continental, Indonesian",
        "timings": "5 PM to 1 AM",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/b43/aae00ded01cd65da9b3fe951c9259b43_1457938325.jpg?output-format=webp",
        "phone": "021 31925888",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 2,
        "name": "Sana Sini Restaurant - Pullman Jakarta Indonesia",
        "url": "https://www.zomato.com/jakarta/sana-sini-restaurant-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Pullman Jakarta Indonesia, Jl. M.H. Thamrin 59, Thamrin, Jakarta",
        "cuisines": "Japanese, Chinese, Western, Indonesian",
        "timings": "5:30 AM to 10:30 AM, 12 Noon to 3 PM, 6 PM to 10 PM (Mon-Fri), 5:30 AM to 11 AM, 12 Noon to 3 PM, 6 PM to 10 PM (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/2/7419572/61ac5ef7324e50ada4f2079cbb295555.jpg",
        "phone": "021 31921111, 021 3906444",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 3,
        "name": "Li Feng - Mandarin Oriental, Jakarta",
        "url": "https://www.zomato.com/jakarta/li-feng-mandarin-oriental-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Hotel Mandarin Oriental, Jakarta, Jl. M. H. Thamrin, Thamrin, Jakarta 10310",
        "cuisines": "Chinese, Dimsum",
        "timings": "11:30 AM to 2:30 PM, 6 PM to 9 PM (Mon-Fri), 11:30 AM to 3 PM, 6 PM to 9 PM (Sat), 11 AM to 3 PM, 6 PM to 9 PM (Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18346266_RESTAURANT_d48ca3d6d9c744a08668406d5a88e53f.jpg",
        "phone": "021 29938825",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 4,
        "name": "KAUM Jakarta",
        "url": "https://www.zomato.com/jakarta/kaum-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Dr. Kusuma Atmaja No. 77-79, Thamrin, Jakarta",
        "cuisines": "Jawa",
        "timings": "11 AM – 12 Midnight (Mon-Thu), 11 AM – 12 Midnight, 12 Midnight – 1 AM (Fri-Sat), 8 AM – 9 PM (Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18524271_RESTAURANT_f8ff5394c9c4dfb09ceac6c931253431.jpg",
        "phone": "021 22393256, 0813 81715256",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 5,
        "name": "JimBARan Lounge - AYANA Midplaza JAKARTA",
        "url": "https://www.zomato.com/jakarta/jimbaran-lounge-ayana-midplaza-jakarta-sudirman?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "AYANA Midplaza JAKARTA, Jl. Jend. Sudirman Kav. 10-11, Sudirman, Jakarta",
        "cuisines": "Asian",
        "timings": "10h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/1/7420051/eb321b2f9f40d2571754d40123420acf.jpg",
        "phone": "021 2510888",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 6,
        "name": "Seasonal Tastes - The Westin Jakarta",
        "url": "https://www.zomato.com/seasonaltastes?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "The Westin Jakarta, Jl. H. R. Rasuna Said, Kuningan, Jakarta",
        "cuisines": "Indonesian, Indian, Western",
        "timings": "6h – 10h, 12h – 16h, 18h – 21h (Mon-Fri),6h – 10h 30m, 12h – 16h, 18h – 21h (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18368132_RESTAURANT_801c8c58979a4cb405bdc29138635188.jpg",
        "phone": "021 27887700, 021 27887768",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 7,
        "name": "Henshin - The Westin Jakarta",
        "url": "https://www.zomato.com/henshin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "The Westin Jakarta, Lantai 67-69, Jl. H. R. Rasuna Said, Kuningan, Jakarta 12940",
        "cuisines": "Peruvian, Japanese",
        "timings": "Closed (Mon, Tue, Sun), 17h – 21h (Wed-Sat)",
        "photos": "https://b.zmtcdn.com/data/pictures/4/18368134/2338746e788a0b9531c94d1231f5e2f1.jpg",
        "phone": "021 27887768, 021 27887788",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 8,
        "name": "OPEN Restaurant - DoubleTree by Hilton Jakarta Diponegoro",
        "url": "https://www.zomato.com/jakarta/open-restaurant-doubletree-by-hilton-jakarta-diponegoro-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "DoubleTree by Hilton Jakarta - Diponegoro, Jl. Pegangsaan Timur No. 17, Cikini - Menteng, Jakarta Pusat  10310",
        "cuisines": "European, Western, Asian",
        "timings": "6h – 22h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/1/7422631/19c0b3591aef42cbe86906e03fa12799.jpg?output-format=webp",
        "phone": "021 29857093, 021 31904433",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 9,
        "name": "Tugu Kunstkring Paleis",
        "url": "https://www.zomato.com/jakarta/tugu-kunstkring-paleis-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Teuku Umar No. 1, Menteng, Jakarta",
        "cuisines": "Betawi, Jawa, Western, Indonesian",
        "timings": "11 AM to 9 PM",
        "photos": "https://b.zmtcdn.com/data/pictures/8/7404738/4db3a9cd4d7d96c8cf2849d5022619c5.jpg",
        "phone": "021 3900899, 0812 82400860",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 10,
        "name": "The Japanese - Sari Pacific Jakarta",
        "url": "https://www.zomato.com/jakarta/the-japanese-sari-pacific-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Sari Pacific Hotel, Jl. M. H. Thamrin No. 6, Thamrin, Jakarta 10340",
        "cuisines": "Sushi, Ramen, Japanese",
        "timings": "11h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/7402859_RESTAURANT_54ddc55159c0fb0a363f16417161ecf8_c.jpg",
        "phone": "021 29932744",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 11,
        "name": "Giyanti Coffee Roastery",
        "url": "https://www.zomato.com/jakarta/giyanti-coffee-roastery-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Surabaya No. 20, Cikini, Jakarta",
        "cuisines": "Coffee",
        "timings": "9 AM to 6 PM (Tue-Sat), Mon & Sun Closed",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/7b8/77f809569ed38bccab8c7807b3d3f7b8_1493640091.jpg",
        "phone": "021 31923698",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 12,
        "name": "Arts Cafe - Raffles Jakarta",
        "url": "https://www.zomato.com/jakarta/arts-cafe-raffles-jakarta-karet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Raffles Jakarta, Jl. Prof. Dr. Satrio No. 3 - 5, Karet, Jakarta 12940",
        "cuisines": "Western, Dimsum",
        "timings": "7h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/0/7422160/faac7a2e63b85364761c05fd8cce47f3.jpg",
        "phone": "021 29880958",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 13,
        "name": "Gelato Secrets",
        "url": "https://www.zomato.com/jakarta/gelato-secrets-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Shophaus, Lantai 1, Jl. Teuku Cik Ditiro No. 36, Menteng, Jakarta",
        "cuisines": "Ice Cream",
        "timings": "10 AM to 11 PM",
        "photos": "https://b.zmtcdn.com/data/pictures/chains/1/18421271/914edad203f5d0c779d70810f4d7bfca.jpg?output-format=webp",
        "phone": "0811 9451144",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 14,
        "name": "Paradigma",
        "url": "https://www.zomato.com/jakarta/paradigma-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Pegangsaan Barat No. 4, Cikini, Jakarta",
        "cuisines": "Coffee, Indonesian",
        "timings": "11h – 24h (Mon-Fri),8h – 24h (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/7/18571667/0e6b4f983c2660c37fdf897bb97a75b1.jpg",
        "phone": "021 29924491",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 15,
        "name": "Bandar Djakarta",
        "url": "https://www.zomato.com/jakarta/bandar-djakarta-ancol?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Taman Impian Jaya Ancol, Jl. Lodan Timur, Ancol, Jakarta 14430",
        "cuisines": "Seafood",
        "timings": "11h – 23h 30m (Mon-Fri),10h – 23h 45m (Sat),10h – 23h 30m (Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/chains/4/7411044/4c3c2fb7efdb5b1c3a565360e158c8ec.jpg?output-format=webp",
        "phone": "021 6455472, 021 6456554",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 16,
        "name": "Cinnamon - Mandarin Oriental, Jakarta",
        "url": "https://www.zomato.com/jakarta/cinnamon-mandarin-oriental-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Hotel Mandarin Oriental, Jakarta, Jl. M. H. Thamrin, Thamrin, Jakarta",
        "cuisines": "Asian, Western",
        "timings": "6 AM to 9 PM",
        "photos": "https://b.zmtcdn.com/data/res_imagery/7401969_RESTAURANT_2601e2a7f0744a0546b5ba12064ce2a1.jpg",
        "phone": "021 29938823, 021 29938888",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 17,
        "name": "Plataran Menteng",
        "url": "https://www.zomato.com/jakarta/plataran-menteng-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. HOS. Cokroaminoto No. 42, Menteng, Jakarta",
        "cuisines": "Indonesian",
        "timings": "11h – 23h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18478836_RESTAURANT_6c16faa66b2508661df58b05e2677930.jpg",
        "phone": "021 29627771, 0813 98908335, 0813 98908336",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 18,
        "name": "Bunga Rampai",
        "url": "https://www.zomato.com/jakarta/bunga-rampai-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Teuku Cik Ditiro No. 35, Menteng, Jakarta",
        "cuisines": "Indonesian",
        "timings": "11h – 23h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/5/7410695/eb8f2537fc7572e4db71a2ba78c7ac57.jpg",
        "phone": "021 31926224, 021 31926225",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 19,
        "name": "Kikugawa",
        "url": "https://www.zomato.com/jakarta/kikugawa-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Cikini 4 No. 13, Cikini, Jakarta",
        "cuisines": "Japanese, Sushi",
        "timings": "11h 30m – 15h, 17h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/07b/2f5a64aaae8f7c7ad625c9c1ba31c07b_1542531141.jpg?output-format=webp",
        "phone": "021 3150668, 021 31902413",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 20,
        "name": "Nasi Goreng Kambing Kebon Sirih 1958 (Nasgorkam Bonsir 1958)",
        "url": "https://www.zomato.com/jakarta/nasi-goreng-kambing-kebon-sirih-1958-nasgorkam-bonsir-1958-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Kebon Sirih No.75, Menteng, Jakarta",
        "cuisines": "Jawa",
        "timings": "5 PM – 12 Midnight, 12 Midnight – 2 AM",
        "photos": "https://b.zmtcdn.com/data/pictures/0/7417570/98dad520e9c20829feef2d34380aa23d.jpg",
        "phone": "0811 190775, 0811 864011, 021 74702499",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    }
]
```

_Response (400 - Bad Request)_
```json
{
  "message": "Validation errors"
}
```

_Response (500 - INTERNAL SERVER ERROR)_
```json
{
  "message": "errors status code 500"
}
```

### GET /restaurant

> Get all assets

_Request Header_
```json
{
  "access_token": "<your access token>",
}
```

_Request Body_
```
    not needed
```

_Response (200)_
```json
[
    {
        "id": 1,
        "name": "BART - Bar at The Roof Top - Artotel Jakarta",
        "url": "https://www.zomato.com/jakarta/bart-bar-at-the-roof-top-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Artotel Jakarta, Lantai 7, Jl. Sunda No. 3, Thamrin, Jakarta",
        "cuisines": "Continental, Indonesian",
        "timings": "5 PM to 1 AM",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/b43/aae00ded01cd65da9b3fe951c9259b43_1457938325.jpg?output-format=webp",
        "phone": "021 31925888",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 2,
        "name": "Sana Sini Restaurant - Pullman Jakarta Indonesia",
        "url": "https://www.zomato.com/jakarta/sana-sini-restaurant-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Pullman Jakarta Indonesia, Jl. M.H. Thamrin 59, Thamrin, Jakarta",
        "cuisines": "Japanese, Chinese, Western, Indonesian",
        "timings": "5:30 AM to 10:30 AM, 12 Noon to 3 PM, 6 PM to 10 PM (Mon-Fri), 5:30 AM to 11 AM, 12 Noon to 3 PM, 6 PM to 10 PM (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/2/7419572/61ac5ef7324e50ada4f2079cbb295555.jpg",
        "phone": "021 31921111, 021 3906444",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 3,
        "name": "Li Feng - Mandarin Oriental, Jakarta",
        "url": "https://www.zomato.com/jakarta/li-feng-mandarin-oriental-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Hotel Mandarin Oriental, Jakarta, Jl. M. H. Thamrin, Thamrin, Jakarta 10310",
        "cuisines": "Chinese, Dimsum",
        "timings": "11:30 AM to 2:30 PM, 6 PM to 9 PM (Mon-Fri), 11:30 AM to 3 PM, 6 PM to 9 PM (Sat), 11 AM to 3 PM, 6 PM to 9 PM (Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18346266_RESTAURANT_d48ca3d6d9c744a08668406d5a88e53f.jpg",
        "phone": "021 29938825",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 4,
        "name": "KAUM Jakarta",
        "url": "https://www.zomato.com/jakarta/kaum-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Dr. Kusuma Atmaja No. 77-79, Thamrin, Jakarta",
        "cuisines": "Jawa",
        "timings": "11 AM – 12 Midnight (Mon-Thu), 11 AM – 12 Midnight, 12 Midnight – 1 AM (Fri-Sat), 8 AM – 9 PM (Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18524271_RESTAURANT_f8ff5394c9c4dfb09ceac6c931253431.jpg",
        "phone": "021 22393256, 0813 81715256",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 5,
        "name": "JimBARan Lounge - AYANA Midplaza JAKARTA",
        "url": "https://www.zomato.com/jakarta/jimbaran-lounge-ayana-midplaza-jakarta-sudirman?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "AYANA Midplaza JAKARTA, Jl. Jend. Sudirman Kav. 10-11, Sudirman, Jakarta",
        "cuisines": "Asian",
        "timings": "10h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/1/7420051/eb321b2f9f40d2571754d40123420acf.jpg",
        "phone": "021 2510888",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 6,
        "name": "Seasonal Tastes - The Westin Jakarta",
        "url": "https://www.zomato.com/seasonaltastes?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "The Westin Jakarta, Jl. H. R. Rasuna Said, Kuningan, Jakarta",
        "cuisines": "Indonesian, Indian, Western",
        "timings": "6h – 10h, 12h – 16h, 18h – 21h (Mon-Fri),6h – 10h 30m, 12h – 16h, 18h – 21h (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18368132_RESTAURANT_801c8c58979a4cb405bdc29138635188.jpg",
        "phone": "021 27887700, 021 27887768",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 7,
        "name": "Henshin - The Westin Jakarta",
        "url": "https://www.zomato.com/henshin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "The Westin Jakarta, Lantai 67-69, Jl. H. R. Rasuna Said, Kuningan, Jakarta 12940",
        "cuisines": "Peruvian, Japanese",
        "timings": "Closed (Mon, Tue, Sun), 17h – 21h (Wed-Sat)",
        "photos": "https://b.zmtcdn.com/data/pictures/4/18368134/2338746e788a0b9531c94d1231f5e2f1.jpg",
        "phone": "021 27887768, 021 27887788",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 8,
        "name": "OPEN Restaurant - DoubleTree by Hilton Jakarta Diponegoro",
        "url": "https://www.zomato.com/jakarta/open-restaurant-doubletree-by-hilton-jakarta-diponegoro-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "DoubleTree by Hilton Jakarta - Diponegoro, Jl. Pegangsaan Timur No. 17, Cikini - Menteng, Jakarta Pusat  10310",
        "cuisines": "European, Western, Asian",
        "timings": "6h – 22h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/1/7422631/19c0b3591aef42cbe86906e03fa12799.jpg?output-format=webp",
        "phone": "021 29857093, 021 31904433",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 9,
        "name": "Tugu Kunstkring Paleis",
        "url": "https://www.zomato.com/jakarta/tugu-kunstkring-paleis-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Teuku Umar No. 1, Menteng, Jakarta",
        "cuisines": "Betawi, Jawa, Western, Indonesian",
        "timings": "11 AM to 9 PM",
        "photos": "https://b.zmtcdn.com/data/pictures/8/7404738/4db3a9cd4d7d96c8cf2849d5022619c5.jpg",
        "phone": "021 3900899, 0812 82400860",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 10,
        "name": "The Japanese - Sari Pacific Jakarta",
        "url": "https://www.zomato.com/jakarta/the-japanese-sari-pacific-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Sari Pacific Hotel, Jl. M. H. Thamrin No. 6, Thamrin, Jakarta 10340",
        "cuisines": "Sushi, Ramen, Japanese",
        "timings": "11h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/7402859_RESTAURANT_54ddc55159c0fb0a363f16417161ecf8_c.jpg",
        "phone": "021 29932744",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 11,
        "name": "Giyanti Coffee Roastery",
        "url": "https://www.zomato.com/jakarta/giyanti-coffee-roastery-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Surabaya No. 20, Cikini, Jakarta",
        "cuisines": "Coffee",
        "timings": "9 AM to 6 PM (Tue-Sat), Mon & Sun Closed",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/7b8/77f809569ed38bccab8c7807b3d3f7b8_1493640091.jpg",
        "phone": "021 31923698",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 12,
        "name": "Arts Cafe - Raffles Jakarta",
        "url": "https://www.zomato.com/jakarta/arts-cafe-raffles-jakarta-karet?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Raffles Jakarta, Jl. Prof. Dr. Satrio No. 3 - 5, Karet, Jakarta 12940",
        "cuisines": "Western, Dimsum",
        "timings": "7h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/0/7422160/faac7a2e63b85364761c05fd8cce47f3.jpg",
        "phone": "021 29880958",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 13,
        "name": "Gelato Secrets",
        "url": "https://www.zomato.com/jakarta/gelato-secrets-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Shophaus, Lantai 1, Jl. Teuku Cik Ditiro No. 36, Menteng, Jakarta",
        "cuisines": "Ice Cream",
        "timings": "10 AM to 11 PM",
        "photos": "https://b.zmtcdn.com/data/pictures/chains/1/18421271/914edad203f5d0c779d70810f4d7bfca.jpg?output-format=webp",
        "phone": "0811 9451144",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 14,
        "name": "Paradigma",
        "url": "https://www.zomato.com/jakarta/paradigma-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Pegangsaan Barat No. 4, Cikini, Jakarta",
        "cuisines": "Coffee, Indonesian",
        "timings": "11h – 24h (Mon-Fri),8h – 24h (Sat-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/7/18571667/0e6b4f983c2660c37fdf897bb97a75b1.jpg",
        "phone": "021 29924491",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 15,
        "name": "Bandar Djakarta",
        "url": "https://www.zomato.com/jakarta/bandar-djakarta-ancol?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Taman Impian Jaya Ancol, Jl. Lodan Timur, Ancol, Jakarta 14430",
        "cuisines": "Seafood",
        "timings": "11h – 23h 30m (Mon-Fri),10h – 23h 45m (Sat),10h – 23h 30m (Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/chains/4/7411044/4c3c2fb7efdb5b1c3a565360e158c8ec.jpg?output-format=webp",
        "phone": "021 6455472, 021 6456554",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 16,
        "name": "Cinnamon - Mandarin Oriental, Jakarta",
        "url": "https://www.zomato.com/jakarta/cinnamon-mandarin-oriental-jakarta-thamrin?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Hotel Mandarin Oriental, Jakarta, Jl. M. H. Thamrin, Thamrin, Jakarta",
        "cuisines": "Asian, Western",
        "timings": "6 AM to 9 PM",
        "photos": "https://b.zmtcdn.com/data/res_imagery/7401969_RESTAURANT_2601e2a7f0744a0546b5ba12064ce2a1.jpg",
        "phone": "021 29938823, 021 29938888",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 17,
        "name": "Plataran Menteng",
        "url": "https://www.zomato.com/jakarta/plataran-menteng-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. HOS. Cokroaminoto No. 42, Menteng, Jakarta",
        "cuisines": "Indonesian",
        "timings": "11h – 23h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/res_imagery/18478836_RESTAURANT_6c16faa66b2508661df58b05e2677930.jpg",
        "phone": "021 29627771, 0813 98908335, 0813 98908336",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 18,
        "name": "Bunga Rampai",
        "url": "https://www.zomato.com/jakarta/bunga-rampai-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Teuku Cik Ditiro No. 35, Menteng, Jakarta",
        "cuisines": "Indonesian",
        "timings": "11h – 23h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/pictures/5/7410695/eb8f2537fc7572e4db71a2ba78c7ac57.jpg",
        "phone": "021 31926224, 021 31926225",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 19,
        "name": "Kikugawa",
        "url": "https://www.zomato.com/jakarta/kikugawa-cikini?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Cikini 4 No. 13, Cikini, Jakarta",
        "cuisines": "Japanese, Sushi",
        "timings": "11h 30m – 15h, 17h – 21h (Mon-Sun)",
        "photos": "https://b.zmtcdn.com/data/reviews_photos/07b/2f5a64aaae8f7c7ad625c9c1ba31c07b_1542531141.jpg?output-format=webp",
        "phone": "021 3150668, 021 31902413",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    },
    {
        "id": 20,
        "name": "Nasi Goreng Kambing Kebon Sirih 1958 (Nasgorkam Bonsir 1958)",
        "url": "https://www.zomato.com/jakarta/nasi-goreng-kambing-kebon-sirih-1958-nasgorkam-bonsir-1958-menteng?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        "location": "Jl. Kebon Sirih No.75, Menteng, Jakarta",
        "cuisines": "Jawa",
        "timings": "5 PM – 12 Midnight, 12 Midnight – 2 AM",
        "photos": "https://b.zmtcdn.com/data/pictures/0/7417570/98dad520e9c20829feef2d34380aa23d.jpg",
        "phone": "0811 190775, 0811 864011, 021 74702499",
        "UserId": null,
        "createdAt": "2020-10-30T00:23:33.931Z",
        "updatedAt": "2020-10-30T00:23:33.931Z"
    }
]
```

_Response (500 - Internal Server Errors)_
```json
{
  "message": "errors status code 500"
}
```
---
### GET /destinations

> Get all assets

_Request Header_
```json
{
  "access_token": "<your access token>",
}
```

_Request Body_
```
    not needed
```

_Response (200)_
```json
[
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Taman Suropati No.5, RT.5/RW.5, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310, Indonesia",
"geometry": {
"location": {
"lat": -6.1994034,
"lng": 106.8326228
},
"viewport": {
"northeast": {
"lat": -6.197727849999999,
"lng": 106.8339836298927
},
"southwest": {
"lat": -6.200813250000001,
"lng": 106.8312839701073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
"name": "Taman Suropati",
"opening_hours": {},
"photos": [
{
"height": 3024,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/113120625667086817030\">duong hieu lam</a>"
],
"photo_reference": "CmRaAAAAA-inQCMhYxrMgq-7RZo--XfUsj-XguAj1-MvuTdryCeRsTCkAAoxDOSOuRtiUEXB1b_B23mAVgVf6-AlELnTHMwo2ftUGenIisbK1BEi5Rj4xmJW0I0nlnZawCZj3VqnEhBOEfKoQ0rOdncWhbmKnd5DGhSI0bC3KR2RZYJFzTPq_WxYZF0WiA",
"width": 4032
}
],
"place_id": "ChIJ-S4F5Bb0aS4RgVq6v81ZM4s",
"plus_code": {
"compound_code": "RR2M+62 Menteng, Central Jakarta City, Jakarta",
"global_code": "6P58RR2M+62"
},
"rating": 4.6,
"reference": "ChIJ-S4F5Bb0aS4RgVq6v81ZM4s",
"types": [
"tourist_attraction",
"park",
"point_of_interest",
"establishment"
],
"user_ratings_total": 15681
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Lodan Timur No.7, RW.10, Ancol, Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14430, Indonesia",
"geometry": {
"location": {
"lat": -6.129329,
"lng": 106.8334251
},
"viewport": {
"northeast": {
"lat": -6.127979170107277,
"lng": 106.8347749298927
},
"southwest": {
"lat": -6.130678829892721,
"lng": 106.8320752701073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
"name": "Taman Impian Jaya Ancol",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 315,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/109778755204156384512\">Ugan</a>"
],
"photo_reference": "CmRaAAAAhEbjGwFQNhuG4Z839UvB1LJPCqskcmvVIsxT8knOswxzYpmU0Lac0S8Usz1mXkngrtBs2rUUKp6rQzLntVg3_EDW7BHtMIX2c96qe86u-HCfeynge19LD8iGFBLgdRYHEhBjRh6KDrmuESXp3FCFH67TGhSlw1jN8b8xCUF3wvnSTxlpDejm3A",
"width": 467
}
],
"place_id": "ChIJcdfvd3T0aS4RWFPBwpxqIIU",
"plus_code": {
"compound_code": "VRCM+79 Ancol, North Jakarta City, Jakarta",
"global_code": "6P58VRCM+79"
},
"rating": 4.5,
"reference": "ChIJcdfvd3T0aS4RWFPBwpxqIIU",
"types": [
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 37646
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Pantai Nusadua No.13, RT.5/RW.10, Ancol, Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14430, Indonesia",
"geometry": {
"location": {
"lat": -6.1194215,
"lng": 106.8502435
},
"viewport": {
"northeast": {
"lat": -6.118071670107279,
"lng": 106.8515933298927
},
"southwest": {
"lat": -6.120771329892722,
"lng": 106.8488936701073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
"name": "Ancol",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 287,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/105866120779762055444\">A Google User</a>"
],
"photo_reference": "CmRaAAAAgYjeEDKkbOEoROR9N_mfzBB61YUaqLfZwjP6fBICj4e5Vp9wkv567RKdOerhFs7qKZvh-q8Uzl8DRsDa09S_U9gOS6d4yq3sXz-Nghy2Rqxi9Me9AU4XJ6weG68meEirEhDOcPX5jKzWNX6wRXQd6mRuGhSX_myIbphz-P-pIL2jTfCx0jjnLg",
"width": 512
}
],
"place_id": "ChIJ9dAc9Tkeai4RQXNhG3FYEd8",
"plus_code": {
"compound_code": "VVJ2+63 Ancol, North Jakarta City, Jakarta",
"global_code": "6P58VVJ2+63"
},
"rating": 4.5,
"reference": "ChIJ9dAc9Tkeai4RQXNhG3FYEd8",
"types": [
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 11138
},
{
"business_status": "CLOSED_TEMPORARILY",
"formatted_address": "Jl. Medan Merdeka Barat No.12, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10110, Indonesia",
"geometry": {
"location": {
"lat": -6.1764021,
"lng": 106.8215901
},
"viewport": {
"northeast": {
"lat": -6.175065320107278,
"lng": 106.8233196798927
},
"southwest": {
"lat": -6.177764979892722,
"lng": 106.8206200201073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
"name": "National Museum",
"permanently_closed": true,
"photos": [
{
"height": 809,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/113914492236873634158\">A Google User</a>"
],
"photo_reference": "CmRaAAAAfDXEnSdxwgYbiFExAhzFPkqgQwBCzk8WdgCi6iFCPbAq8LWeG3B_wiC4bt8nGDiNaiM1ylbpGyaGxYEVlECdq6bDHoleJ-LdI0txu7P9ebl5vbjtyk-fc6x9LNmlFjAIEhBQGN5qOnjo6ox9Za6U5dDXGhS5ZAa-2N34ES58ZprMnNX7rz47EQ",
"width": 1440
}
],
"place_id": "ChIJi_JxtdT1aS4R7Vhgb1ZBFaQ",
"plus_code": {
"compound_code": "RRFC+CJ Gambir, Central Jakarta City, Jakarta",
"global_code": "6P58RRFC+CJ"
},
"rating": 4.6,
"reference": "ChIJi_JxtdT1aS4R7Vhgb1ZBFaQ",
"types": [
"tourist_attraction",
"museum",
"point_of_interest",
"establishment"
],
"user_ratings_total": 10349
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Gambir, Central Jakarta City, Jakarta, Indonesia",
"geometry": {
"location": {
"lat": -6.1753924,
"lng": 106.8271528
},
"viewport": {
"northeast": {
"lat": -6.1672347,
"lng": 106.8341747
},
"southwest": {
"lat": -6.1845907,
"lng": 106.8196091
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
"name": "National Monument",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 2304,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/101562911253331401601\">Tommy Tjahjono</a>"
],
"photo_reference": "CmRaAAAAcyqJ1jUueCr0RT2DvtqUwIT4szzrMzgP4Lika25xtRFPxuHdJ_Jr_XNeEVBTS9uKZOqOqtUbQYo5wgxnxeINddMRchucqO--EYMQTKxsmGEZxmeY3WdRPwxOKRGxte6pEhDGLJpz9Ia7kG7sYozCsEAHGhTrtko6b7ZNjIf03bTKDkI-X3f4tg",
"width": 1536
}
],
"place_id": "ChIJLbFk59L1aS4RyLzp4OHWKj0",
"plus_code": {
"compound_code": "RRFG+RV Gambir, Central Jakarta City, Jakarta",
"global_code": "6P58RRFG+RV"
},
"rating": 4.6,
"reference": "ChIJLbFk59L1aS4RyLzp4OHWKj0",
"types": [
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 99168
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jalan Pintu Besar Utara No.27 Pinangsia, RT.3/RW.6, Kota Tua, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11110, Indonesia",
"geometry": {
"location": {
"lat": -6.1349072,
"lng": 106.8124452
},
"viewport": {
"northeast": {
"lat": -6.133505020107278,
"lng": 106.8139464798927
},
"southwest": {
"lat": -6.136204679892722,
"lng": 106.8112468201073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
"name": "Wayang Museum",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 500,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/106624992937179006543\">Joko Yuwono</a>"
],
"photo_reference": "CmRaAAAAJrT2ARnqPktN54eziLjhCVqwxFDyTtTEZpOx0wcxYc5FhQEv5stsLvnOK3VCBs49FJStKYmgIcWp0sJKZAs0J6VAhRzUOY_lNhejq_VbnYQKoTtaP1BfqvW1VjpPf969EhA3m8159yT-LlHanApqwOzvGhSZfsl0-68rbFrKDZj5xvr30CvgJA",
"width": 753
}
],
"place_id": "ChIJ_1nySP8dai4RU7hd4de_tv4",
"plus_code": {
"compound_code": "VR86+2X Pinangsia, West Jakarta City, Jakarta",
"global_code": "6P58VR86+2X"
},
"rating": 4.5,
"reference": "ChIJ_1nySP8dai4RU7hd4de_tv4",
"types": [
"tourist_attraction",
"museum",
"point_of_interest",
"establishment"
],
"user_ratings_total": 4097
},
{
"business_status": "OPERATIONAL",
"formatted_address": "East Jakarta City, Jakarta, Indonesia",
"geometry": {
"location": {
"lat": -6.302445899999999,
"lng": 106.8951559
},
"viewport": {
"northeast": {
"lat": -6.29588125,
"lng": 106.9169446
},
"southwest": {
"lat": -6.308422650000002,
"lng": 106.8732258
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
"name": "Taman Mini Indonesia Indah",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 399,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/101971919727765135004\">A Google User</a>"
],
"photo_reference": "CmRaAAAAJfN6qfkP4nSZn0KOraJKm4_xDxYnazSm72lAZLIrjFmAlLUQHilqF2DwyDkRAguy21SqYGCc5G3ssWA2EeoNDJrZKeE8E8YDED1QNLEGOKz9oLBePDe1iJpEXG44MyhaEhAf883DxLnLrT3X95-COsZtGhR0760jeKPkrB7tBtMhwEHs0lCIlw",
"width": 594
}
],
"place_id": "ChIJYaJ20FDtaS4RDNry7LknMQc",
"plus_code": {
"compound_code": "MVXW+23 Ceger, East Jakarta City, Jakarta",
"global_code": "6P58MVXW+23"
},
"rating": 4.5,
"reference": "ChIJYaJ20FDtaS4RDNry7LknMQc",
"types": [
"tourist_attraction",
"museum",
"amusement_park",
"park",
"point_of_interest",
"establishment"
],
"user_ratings_total": 128087
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jalan Taman Fatahillah No.1, Pinangsia, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11110, Indonesia",
"geometry": {
"location": {
"lat": -6.135199999999999,
"lng": 106.8133
},
"viewport": {
"northeast": {
"lat": -6.133731970107278,
"lng": 106.8147230298927
},
"southwest": {
"lat": -6.136431629892722,
"lng": 106.8120233701073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
"name": "Jakarta History Museum",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 2268,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/111735359473600752171\">Tariq attariq</a>"
],
"photo_reference": "CmRaAAAAo1ldg5G-QAZtSsuuUzr1KtgbK2u5JPyVVs_nlbrC42WkeW3_JT_dHf_12LpD12-r1Q-Hdpn481WcB_OXFzF-ozPX1q-Up864xDXbijQDNlHa6cOp8syoB57EKJ3eStHUEhC3r5OCDZsyT-l14NXfZGM7GhQdSCxEQl_f90bkJ15WAzyPZc3BmA",
"width": 4032
}
],
"place_id": "ChIJfaWSQv8dai4RRQeMZy0D8BI",
"plus_code": {
"compound_code": "VR77+W8 Pinangsia, West Jakarta City, Jakarta",
"global_code": "6P58VR77+W8"
},
"rating": 4.5,
"reference": "ChIJfaWSQv8dai4RRQeMZy0D8BI",
"types": [
"museum",
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 18999
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Harsono RM No.1, Ragunan, Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
"geometry": {
"location": {
"lat": -6.3124593,
"lng": 106.8201865
},
"viewport": {
"northeast": {
"lat": -6.302543700000001,
"lng": 106.8304469
},
"southwest": {
"lat": -6.315764499999999,
"lng": 106.8114029
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
"name": "Ragunan Zoo",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 3376,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/106564992723692129615\">Adhitya Zc</a>"
],
"photo_reference": "CmRaAAAARdq35ntu0LLwGi7lC_ZfoOd2JPdNSRi41-I1WQF8r0LLfY7AGhLQ01IRYcb-HrE1tmxcneCmlXYkWG0rR5XnXUaqIVB9m1kjPCox4nMKx5qYJ7v9iOdQ8eUtcGq4P5xuEhBmaPVdXnUPHhmtzJjlbjTjGhRSFtLQ9J4TdWJUdNOHrqUBuJQdUQ",
"width": 6000
}
],
"place_id": "ChIJfXt_sf3taS4Rmga1Wj8q3fk",
"plus_code": {
"compound_code": "MRQC+23 Ragunan, South Jakarta City, Jakarta",
"global_code": "6P58MRQC+23"
},
"rating": 4.5,
"reference": "ChIJfXt_sf3taS4Rmga1Wj8q3fk",
"types": [
"zoo",
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 88003
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Lodan Timur No.7, RW.10, Ancol, Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14430, Indonesia",
"geometry": {
"location": {
"lat": -6.125312399999999,
"lng": 106.8335377
},
"viewport": {
"northeast": {
"lat": -6.12427285,
"lng": 106.8351706298927
},
"southwest": {
"lat": -6.128431050000001,
"lng": 106.8324709701073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
"name": "Dunia Fantasi",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 3496,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/112533604141984216516\">BADRUL MUNIR</a>"
],
"photo_reference": "CmRaAAAAPe0CjEcaNy2Co_k8IjSi8D6G-YLRvzZneW0vbizILa11Cyb5zOdwdxl9oPgFupMd_s6yLXSlg7H5cyR8vIERYfkdJVvJfBYF5GWygwusWiQgbVqaovhKT7UZhK5fMeN3EhA9ICRS79SdoVTCjzwqOtwxGhTeEilMsPT3AcNJVA89_tSbrbwddg",
"width": 4656
}
],
"place_id": "ChIJVwxCgBoeai4R4zIiPSWTWyc",
"plus_code": {
"compound_code": "VRFM+VC Ancol, North Jakarta City, Jakarta",
"global_code": "6P58VRFM+VC"
},
"rating": 4.6,
"reference": "ChIJVwxCgBoeai4R4zIiPSWTWyc",
"types": [
"amusement_park",
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 55681
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Taman Impian Jaya, Jl. Lodan timur No.7, RW.10, Ancol, Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14430, Indonesia",
"geometry": {
"location": {
"lat": -6.12419,
"lng": 106.839134
},
"viewport": {
"northeast": {
"lat": -6.123203570107278,
"lng": 106.8415901
},
"southwest": {
"lat": -6.125903229892722,
"lng": 106.8383153
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
"name": "Atlantis Water Adventures Ancol",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 746,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/102508831148720967896\">erkan onuk</a>"
],
"photo_reference": "CmRaAAAAElEPpWT0TwfXmImRBvoutMjl91KLi7V24wzcOljZkQfwEmuxcZFU7CjZ_ov-Y6uMZ1o0A5mw5krjTR5LlJP97ZXlKmpfoRZxr1aOq7525gQ16mG1hzSwmUpu5mUuFltNEhB2jCO3dCT5azSJXJtyYazeGhTNpARK5OkvUbIp8fjxfXMhBL2zaw",
"width": 1400
}
],
"place_id": "ChIJSb_tryQeai4Razpg-FOwECI",
"plus_code": {
"compound_code": "VRGQ+8M Ancol, North Jakarta City, Jakarta",
"global_code": "6P58VRGQ+8M"
},
"rating": 4.5,
"reference": "ChIJSb_tryQeai4Razpg-FOwECI",
"types": [
"tourist_attraction",
"amusement_park",
"point_of_interest",
"establishment"
],
"user_ratings_total": 8464
},
{
"business_status": "OPERATIONAL",
"formatted_address": "6, Jalan Lada 3, RT.3/RW.6, Pinangsia, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11110, Indonesia",
"geometry": {
"location": {
"lat": -6.137127,
"lng": 106.813005
},
"viewport": {
"northeast": {
"lat": -6.135937270107277,
"lng": 106.8145927798927
},
"southwest": {
"lat": -6.138636929892721,
"lng": 106.8118931201073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
"name": "Museum Bank Indonesia",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 3024,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/100801443672328785216\">Reshma Sanghvi</a>"
],
"photo_reference": "CmRZAAAAgqxVZSYhCsNkTvOkXUuboezFTYXbzJmabpvdWgi1U6R30ScePAz_AzEpXVWaQjmdWs5BjPHaP8QCGRmanIUeyHPAMcaECqV9EpDqnLo25Es-aBI32lrA9fTzh_DeRpdzEhCAdKGMTUJYOxfwGrzzv4S2GhQdovo9byBYq9v5EkSuKzxj21G72w",
"width": 4032
}
],
"place_id": "ChIJDzlr6wH2aS4Ro2gBJGt31G0",
"plus_code": {
"compound_code": "VR77+46 Pinangsia, West Jakarta City, Jakarta",
"global_code": "6P58VR77+46"
},
"rating": 4.7,
"reference": "ChIJDzlr6wH2aS4Ro2gBJGt31G0",
"types": [
"museum",
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 9419
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Neo Soho Lantai LG 101 - LGM 101 Jalan Letjen S. Parman Kav. 28 RT.3, RT.3/RW.5, Tj. Duren Sel., Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470, Indonesia",
"geometry": {
"location": {
"lat": -6.175019300000001,
"lng": 106.7900286
},
"viewport": {
"northeast": {
"lat": -6.173318620107278,
"lng": 106.7914866798927
},
"southwest": {
"lat": -6.176018279892722,
"lng": 106.7887870201073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
"name": "Jakarta Aquarium",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 2268,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/112286489422917719063\">Hilly Pancaningsih</a>"
],
"photo_reference": "CmRZAAAAbBYMSuwIVf4TqXLXFakMaV4kuUttSLL7hAwtZNHuxhFPaUbm-yQHKksGgnuIuYv1OQRMUdPTLN1H8NkJkBipDXAbKfEOSI1Fzs6Dt8-QFPXIy-nhOBodm_8JtzGKgYP4EhCIcjBX8sa0G9d77Behxhv5GhSgU0Wv_PV340Hu33hqmCJ6PsRrQQ",
"width": 4032
}
],
"place_id": "ChIJVxQuHl_2aS4RXGiHAojWaHw",
"plus_code": {
"compound_code": "RQFR+X2 South Tanjung Duren, West Jakarta City, Jakarta",
"global_code": "6P58RQFR+X2"
},
"rating": 4.5,
"reference": "ChIJVxQuHl_2aS4RXGiHAojWaHw",
"types": [
"tourist_attraction",
"amusement_park",
"point_of_interest",
"establishment"
],
"user_ratings_total": 11954
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Lodan timur No.7, RW.10, Ancol, Kec. Pademangan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14430, Indonesia",
"geometry": {
"location": {
"lat": -6.1258263,
"lng": 106.8428182
},
"viewport": {
"northeast": {
"lat": -6.124679420107277,
"lng": 106.8443818798927
},
"southwest": {
"lat": -6.127379079892721,
"lng": 106.8416822201073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
"name": "Sea World Ancol",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 3096,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/116181587503364893384\">Chiki Anwar</a>"
],
"photo_reference": "CmRZAAAAbpL5bewdyqlf2A9pbBI8qGG1-ZxOsVtsQlFW4lIgvUYYnqA8VVkekQmmh0p5EJSspLf4E6I3kAG0L3ccstHvxK2kwP89gmmIpx564oE7YQf-Pg_8yLbMFWqUKRgvt7UEEhBJUaThtHj2G3ErUK9bEGI_GhQyyqT9jjGf_DvF7BGH50OOphfSkg",
"width": 4128
}
],
"place_id": "ChIJG1ytuCIeai4RELSMP0wM6o4",
"plus_code": {
"compound_code": "VRFV+M4 Ancol, North Jakarta City, Jakarta",
"global_code": "6P58VRFV+M4"
},
"rating": 4.5,
"reference": "ChIJG1ytuCIeai4RELSMP0wM6o4",
"types": [
"aquarium",
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 31127
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Garden House No.4, RW.3, Kamal Muara, Kec. Penjaringan, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14470, Indonesia",
"geometry": {
"location": {
"lat": -6.105334,
"lng": 106.735584
},
"viewport": {
"northeast": {
"lat": -6.104381,
"lng": 106.7425485
},
"southwest": {
"lat": -6.108192999999999,
"lng": 106.7201713
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
"name": "Taman Wisata Alam Mangrove, Angke Kapuk",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 3024,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/107341688543489746622\">Yoshihiro Yamamoto</a>"
],
"photo_reference": "CmRaAAAAu9HC-aicdUFA9XhR6_llFWKUW5dsdTlWIUrEYwI7D0Wp5_Cij-UIgFsmovyxy64wVgs3LMz-mUWWEfZV0yZoTpxIzUfgq6gCkQ9uLwaBIu5eEphSJuGokfk9PShznR2uEhB4Ae33Sgo9b7DHKZM6b9WYGhQRk03FkysPzZp85ebVPBymS1Z0Jw",
"width": 4032
}
],
"place_id": "ChIJoytQiSUdai4RkGKxmmKQnMM",
"plus_code": {
"compound_code": "VPVP+V6 Kamal Muara, North Jakarta City, Jakarta",
"global_code": "6P58VPVP+V6"
},
"rating": 4.3,
"reference": "ChIJoytQiSUdai4RkGKxmmKQnMM",
"types": [
"tourist_attraction",
"lodging",
"park",
"point_of_interest",
"establishment"
],
"user_ratings_total": 12396
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Pasar Baru, Sawah Besar, Central Jakarta City, Jakarta 10710, Indonesia",
"geometry": {
"location": {
"lat": -6.170554999999999,
"lng": 106.8350378
},
"viewport": {
"northeast": {
"lat": -6.169611620107279,
"lng": 106.8382978
},
"southwest": {
"lat": -6.172311279892723,
"lng": 106.8318254
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/park-71.png",
"name": "Taman Lapangan Banteng",
"photos": [
{
"height": 3024,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/110029032494729660040\">Fariza Rizky</a>"
],
"photo_reference": "CmRaAAAAP44WPFYlC3jhD53zCGmjyc_9_GRnHOQxNtbGDexctvicN6wNZV9eN2LpGtLcgD1oLtFbHwm1-Sv7tMA0r3FcxnllcW6tlXW0vHatiZQxbGMLPhafrXo4OXAvCsBOCnbfEhBPOMqFcTlfrCTwocAp_jC_GhRTKTikxa8zPULTEeIgFkDx_fPcLg",
"width": 4032
}
],
"place_id": "ChIJA88y_8v1aS4RbfwYWObt98A",
"plus_code": {
"compound_code": "RRHP+Q2 Pasar Baru, Central Jakarta City, Jakarta",
"global_code": "6P58RRHP+Q2"
},
"rating": 4.7,
"reference": "ChIJA88y_8v1aS4RbfwYWObt98A",
"types": [
"tourist_attraction",
"park",
"point_of_interest",
"establishment"
],
"user_ratings_total": 11866
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Pos Kota No.2, RT.9/RW.7, Pinangsia, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11110, Indonesia",
"geometry": {
"location": {
"lat": -6.1342199,
"lng": 106.8144164
},
"viewport": {
"northeast": {
"lat": -6.132939270107277,
"lng": 106.8155974298927
},
"southwest": {
"lat": -6.135638929892721,
"lng": 106.8128977701073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
"name": "Museum of Fine Art and Ceramics",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 3464,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/106592600163387443251\">Alief Patria</a>"
],
"photo_reference": "CmRaAAAAR5MJVo6jkPZPvh6K9w2Kmkx3ze25pGXPgu7K2i4BZVuPIGRDmBi_5dSBQ4vxm3aXvloyld6NKaVDQG4ytSEVaqG84ZHq0TzLgEH1i7zRx6V16hz4j9HVWLQhtLee4lx7EhDxRjRoR1SKPsi_UQVpkcehGhSwejkAW5Z3cZNAeVH9QTmmHZAzYw",
"width": 4618
}
],
"place_id": "ChIJLSSPQv8dai4Ra0pPbm8wvj4",
"plus_code": {
"compound_code": "VR87+8Q Pinangsia, West Jakarta City, Jakarta",
"global_code": "6P58VR87+8Q"
},
"rating": 4.4,
"reference": "ChIJLSSPQv8dai4Ra0pPbm8wvj4",
"types": [
"museum",
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 2940
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Katedral No.7B, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710, Indonesia",
"geometry": {
"location": {
"lat": -6.169225,
"lng": 106.833063
},
"viewport": {
"northeast": {
"lat": -6.168037820107278,
"lng": 106.8345581798927
},
"southwest": {
"lat": -6.170737479892722,
"lng": 106.8318585201073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/worship_general-71.png",
"name": "Jakarta Cathedral",
"opening_hours": {
"open_now": false
},
"photos": [
{
"height": 1878,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/114390435103671671018\">A Google User</a>"
],
"photo_reference": "CmRZAAAAiq4fss0wqVYBCF0F1WK3bcMteokb-gqgBjwWZyalVLRAu3CBMsYu0wpeeWro7SFfSg0JHyWW3bXEGtG1VrU4ZhKEktTb1eVvo-fVszwUAqAlT5UxtOXE-Ud1AOZnMK2rEhCJzxgBlKgfw-regy_PGjo_GhQSwxDDCRNSX5p3zbnUCA0Rv9jQnA",
"width": 1057
}
],
"place_id": "ChIJrSFu-M71aS4RefySRqf97AM",
"plus_code": {
"compound_code": "RRJM+86 Pasar Baru, Central Jakarta City, Jakarta",
"global_code": "6P58RRJM+86"
},
"rating": 4.8,
"reference": "ChIJrSFu-M71aS4RefySRqf97AM",
"types": [
"tourist_attraction",
"church",
"place_of_worship",
"point_of_interest",
"establishment"
],
"user_ratings_total": 9109
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Ks. Tubun No.2-4, RT.4/RW.2, Kota Bambu Sel., Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11420, Indonesia",
"geometry": {
"location": {
"lat": -6.1879634,
"lng": 106.8096081
},
"viewport": {
"northeast": {
"lat": -6.186997370107279,
"lng": 106.8110649798927
},
"southwest": {
"lat": -6.189697029892723,
"lng": 106.8083653201073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/museum-71.png",
"name": "Museum of Textile",
"opening_hours": {
"open_now": true
},
"photos": [
{
"height": 648,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/114789069602462638950\">Eko Budi Utomo</a>"
],
"photo_reference": "CmRaAAAAXqENW1wYxXaXtA1y4xp_6W5lp2P5IBW8pzj_s3BIH_UI8vFwg5iszBoPOOBPmNUj-bC83XlM-nSs716Tu94SrPFWJoJk5kHDAppIrYvUV8A5oJvnAaKE4-RIRIAjv7hBEhDAZR5vUObDnWsK2IL8ZdmFGhQj9sLuu3FlR_W44J2Fp2ro_RZhPw",
"width": 972
}
],
"place_id": "ChIJXVigIpv2aS4REJto8lZlJ9w",
"plus_code": {
"compound_code": "RR65+RR South Bambu City, West Jakarta City, Jakarta",
"global_code": "6P58RR65+RR"
},
"rating": 4.5,
"reference": "ChIJXVigIpv2aS4REJto8lZlJ9w",
"types": [
"museum",
"tourist_attraction",
"point_of_interest",
"establishment"
],
"user_ratings_total": 2242
},
{
"business_status": "OPERATIONAL",
"formatted_address": "Jl. Taman Wijaya Kusuma, Ps. Baru, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10710, Indonesia",
"geometry": {
"location": {
"lat": -6.17017,
"lng": 106.83139
},
"viewport": {
"northeast": {
"lat": -6.168396720107278,
"lng": 106.8333426298927
},
"southwest": {
"lat": -6.171096379892722,
"lng": 106.8306429701073
}
}
},
"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/worship_islam-71.png",
"name": "Istiqlal Mosque",
"opening_hours": {
"open_now": false
},
"photos": [
{
"height": 583,
"html_attributions": [
"<a href=\"https://maps.google.com/maps/contrib/102650922543704559418\">A Google User</a>"
],
"photo_reference": "CmRaAAAA2qnzYjIoZ4ymYC30HS7QZTgqE9rGSZYTgBGM12g5SV0fkjN1ug6t2slIoVgoDIQTCC-wB0w5Cgx9_53CLUOIWJb3aq5ttkrRe5VhMHYuHkwuJkSVXljLXDxwud_4U3iwEhBAw6KDkYsnM0SgUnbTYWDPGhTf2ChTAfIxaIZUjA2VTb2i9lJ3iA",
"width": 1024
}
],
"place_id": "ChIJHeC1aM71aS4RbAyE1ULw-so",
"plus_code": {
"compound_code": "RRHJ+WH Pasar Baru, Central Jakarta City, Jakarta",
"global_code": "6P58RRHJ+WH"
},
"rating": 4.7,
"reference": "ChIJHeC1aM71aS4RbAyE1ULw-so",
"types": [
"mosque",
"tourist_attraction",
"place_of_worship",
"school",
"point_of_interest",
"establishment"
],
"user_ratings_total": 7215
}
]
```

_Response (500 - Internal Server Errors)_
```json
{
  "message": "errors status code 500"
}
```

---
