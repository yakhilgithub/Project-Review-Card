const reviews = [
    {
      id: 1,
      name: "Robin Frost",
      job: "Reporter",
      img:
        "https://images.unsplash.com/photo-1568044852337-9bcc3378fc3c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzc4OA&ixlib=rb-1.2.1&q=85",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "Paid Reveiwer",
      img:
        "https://images.unsplash.com/photo-1620122303020-87ec826cf70d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4NzQ4Nw&ixlib=rb-1.2.1&q=85",
      text:
        "Porem ipsum , eius earum ipsam cupiditate libero? Iste, doloremque nihil? dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt...",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzg2NQ&ixlib=rb-1.2.1&q=85",
      text:
        "Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyODA4Nzg2NQ&ixlib=rb-1.2.1&q=85",
      text:
        "&ukuLorem ip Iste, doloremque nihil? sum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? ",
    },
    {
        id: 5,
        name: "THara bhai",
        job: "Chai wala",
        img:
       "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:
          "&ukuLorem ip Iste, doloremque nihil? sum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? ",
      },
      {
        id: 6,
        name: "Liverani",
        job: "Tech Lead",
        img:
       "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:
          "&ukuLorem ip Iste, doloremque nihil? sum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? ",
      },
      {
        id: 7,
        name: "Jeffery holland",
        job: "Paid Reviewer",
        img:
          "https://images.unsplash.com/photo-1599698011977-c08128ff1652?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:
          "Porem ipsum , eius earum ipsam cupiditate libero? Iste, doloremque nihil? dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt...",
      },
      {
        id: 8,
        name: "Jonas arote",
        job: "App developer",
        img:
          "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:
          "Porem ipsum , eius earum ipsam cupiditate libero? Iste, doloremque nihil? dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt...",
      },
      {
        id: 9,
        name: "Pappu",
        job: "Design Lead",
        img:
          "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:
          "Porem ipsum , eius earum ipsam cupiditate libero? Iste, doloremque nihil? dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt...",
      },
      {
        id: 10,
        name: "Sobhan Alan",
        job: " Content Creator",
        img:
          "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:
          "Porem ipsum , eius earum ipsam cupiditate libero? Iste, doloremque nihil? dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt...",
      },
      {
        id: 11,
        name: "Vicky orry",
        job: "Data Scientist",
        img:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:
          "Porem ipsum , eius earum ipsam cupiditate libero? Iste, doloremque nihil? dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt...",
      },
    
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  let currentItem = 0;
  window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  
  randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });