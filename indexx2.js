setInterval(() => {
        const update=new Date();
        let hour=update.getHours();
        const meridian=hour%12>=0 ? "AM":"PM";
        hour=hour%12||12;
        hour=hour.toString().padStart(2,0);
        const minute=update.getMinutes().toString().padStart(2,0);
        const seconds=update.getSeconds().toString().padStart(2,0);
        let timeStirng=`${hour}:${minute}:${seconds} ${meridian}`;
        document.getElementById("inner").textContent=timeStirng;   
},1000);