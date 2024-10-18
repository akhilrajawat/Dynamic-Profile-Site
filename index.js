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

app.get('/profile/:n',(req,res)=>{
    const names=['Amit','Aman','Anikesh','Ajay','Arun','Arjun','Abhijit','Akhil','Anmol','Ankit'];
    const professions =['Full Stack Developer','UI UX Designer','Backend Developer','Frontend Developer','Web Designer','Vasu Designer','Full Stack Developer','App Developer','Games Developer','Frontend Developer'];
    const addresses =['Haridwar','Bihar','Mumbai','Jharkhand','Delhi','Uttar Pradesh','Lucknow','Banglore','Madhubani','Balrampur'];
    const fullname =['Amit Kumar Jha','Aman Kumar',' Anikesh Sharma','Ajay Nagar','Arun Tendulker','Arjun Pandit','Abhijit Singh','Akhil Pratap Singh','Anmol Pathak','Ankit Kumar'];
    const emails =['Amit Kumar Jha','Aman Kumar',' Anikesh Sharma','Ajay Nagar','Arun Tendulker','Arjun Pandit','Abhijit Singh','Akhil Pratap Singh','Anmol Pathak','Ankit Kumar'];
    
    let data=[];
    for (let i = 0; i<10; i++){
        data.push({name: names[i],profession: professions[i], address: addresses[i], fullname :fullname[i], email: emails[i]});
    }
    let n=Number(req.params.n);
    console.log(data[n]);
    res.render('profile.ejs',data[n]); 
})

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
});