const v=fetch('https://api.kanye.rest/');

v.then(d=>{
  const vs=d.json();
  vs.then(e=>{
    console.log(e).catch(error=>console.log(error));
  });
});