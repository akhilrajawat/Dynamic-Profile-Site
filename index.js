const profile_data=require('./data.js')
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('views', (__dirname + "/views"));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    const names=['Amit','Aman','Anikesh','Ajay','Arun','Arjun','Abhijit','Akhil','Anmol','Ankit'];
    let data=[];
    for (let i = 0; i<10; i++){
        data.push({name: names[i]})
    }
    console.log(data);
    res.render('home',{rows: data});    
});
app.get('/aboutus', (req,res)=>{
    res.send('Hi this is aboutus page');
})

// const profile_data=[
//     {
//       "FullName": "John Doe",
//       "Email": "johndoe@example.com",
//       "Phone": "+1 555-1234",
//       "Mobile": "+1 555-5678",
//       "Address": "123 Main St, New York, NY 10001",
//       "Profession":"Full Stack Developer",
//       "WebDesign": true,
//       "WebsiteMarkup": true,
//       "OnePage": false,
//       "MobileTemplate": true,
//       "BackendAPI": false
//     },
//     {
//       "FullName": "Jane Smith",
//       "Email": "janesmith@example.com",
//       "Phone": "+44 20 7946 0958",
//       "Mobile": "+44 77 8000 8000",
//       "Address": "45 Victoria St, London SW1H 0EU, UK", 
//       "Profession":"Data Analyst",
//       "WebDesign": false,
//       "WebsiteMarkup": true,
//       "OnePage": true,
//       "MobileTemplate": false,
//       "BackendAPI": true
//     },
//     {
//       "FullName": "Michael Johnson",
//       "Email": "mjohnson@example.com",
//       "Phone": "+61 2 9876 5432",
//       "Mobile": "+61 400 555 555",
//       "Address": "78 George St, Sydney NSW 2000, Australia",
//       "Profession":"AI engineer",
//       "WebDesign": true,
//       "WebsiteMarkup": false,
//       "OnePage": false,
//       "MobileTemplate": true,
//       "BackendAPI": true
//     },
//     {
//       "FullName": "Emily Davis",
//       "Email": "edavis@example.com",
//       "Phone": "+49 30 123456",
//       "Mobile": "+49 160 1234567",
//       "Address": "Friedrichstrasse 43-45, 10117 Berlin, Germany",
//       "Profession":"UI UX Designer",
//       "WebDesign": true,
//       "WebsiteMarkup": true,
//       "OnePage": true,
//       "MobileTemplate": false,
//       "BackendAPI": false
//     },
//     {
//       "FullName": "Carlos Martinez",
//       "Email": "cmartinez@example.com",
//       "Phone": "+34 91 123 45 67",
//       "Mobile": "+34 600 123 456",
//       "Address": "Calle Mayor 1, 28013 Madrid, Spain",
//       "Profession":"Frontend Developer",
//       "WebDesign": false,
//       "WebsiteMarkup": true,
//       "OnePage": true,
//       "MobileTemplate": true,
//       "BackendAPI": true
//     }
//   ]

app.get('/profile/:n',(req,res)=>{
    // const names=['Amit','Aman','Anikesh','Ajay','Arun','Arjun','Abhijit','Akhil','Anmol','Ankit'];
    // const professions =['Full Stack Developer','UI UX Designer','Backend Developer','Frontend Developer','Web Designer','Vasu Designer','Full Stack Developer','App Developer','Games Developer','Frontend Developer'];
    // const addresses =['Haridwar','Bihar','Mumbai','Jharkhand','Delhi','Uttar Pradesh','Lucknow','Banglore','Madhubani','Balrampur'];
    // const fullname =['Amit Kumar Jha','Aman Kumar',' Anikesh Sharma','Ajay Nagar','Arun Tendulker','Arjun Pandit','Abhijit Singh','Akhil Pratap Singh','Anmol Pathak','Ankit Kumar'];
    // const emails =['Amit Kumar Jha','Aman Kumar',' Anikesh Sharma','Ajay Nagar','Arun Tendulker','Arjun Pandit','Abhijit Singh','Akhil Pratap Singh','Anmol Pathak','Ankit Kumar'];
    let n=Number(req.params.n);
    let data=profile_data[n];
    // for (let i = 0; i<10; i++){
    //     data.push({name: names[i],profession: professions[i], address: addresses[i], fullname :fullname[i], email: emails[i]});
    // }
    
    console.log(data);
    res.render('profile.ejs',data); 
})



app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
});