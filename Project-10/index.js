//Team Data
const team = [
    {
      id: "anna",
      fullName: "Anna Kendrick",
      jobTitle: "Front-end Ninja",
      bio:
        "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
      avatar: "/session5-takehome/avataaars/annakendrick.svg"
    },
    {
      id: "harry",
      fullName: "Harry Fawn",
      jobTitle: "Illustrator",
      bio:
        "Creates new illustrations each week, will kill for coffee, and loves beaches",
      avatar: "/session5-takehome/avataaars/harryfn.svg"
    },
    {
      id: "sofia",
      fullName: "Sofia Sultan",
      jobTitle: "Backend Engineer",
      bio:
        "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
      avatar: "/session5-takehome/avataaars/sofiasul.svg"
    }
  ];
  
  //Modify Code below this line
  
  //Content Selected using ID.
  const content = document.getElementById("content");
  
  /**
   * Creates and img HTML element with given src and alt
   * @param {string} src - Source for image
   * @param {string} alt - Alt text for image
   * @returns An Image HTML Element
   */


  const getImageElement = (src, alt) => {
    const newImage = document.createElement('img');
    newImage.src=src;
    newImage.alt=alt;
    return newImage;
  };
  
  /**
   * Creates a new card with passed parameters.
   * @param {string} id - Unique id from team data
   * @param {string} fullName - Name of the team member
   * @param {string} jobTitle - Job title of the team memeber
   * @param {string} bio - Description Bio
   * @param {string} avatar - Source of the avatar image.
   * @returns section HTML element with Image and Text
   */
  function generateCard(id, fullName, jobTitle, bio, avatar) {
    //1. Create a new "section" element and set the className and id
    const sessionEl=document.createElement("session");
    sessionEl.setAttribute("class","card")
    sessionEl.setAttribute("id",id);
  
    //2. Generate the image using getImageElement() function
    //Hint - Use fullname as alt for the image.
    const newImageEl = getImageElement(getImageElement(avatar,fullName));
  
    //3. Create a div for text content
    const divEl=document.createElement("div");
  
    //4. Create an h2 for fullName
    const h2El=document.createElement("h2");
    h2El.innerHTML=fullName;
  
    //5. Create an h3 for jobTitle
    const h3El=document.createElement("h3");
    h3El.innerHTML=jobTitle;
  
    //6. Create a p for bio
    const pEl=document.createElement("p");
    pEl.innerHTML=bio;
  
    //7. Append the fullName, jobTitle, and bio element
    //   to the div created for text.

    divEl.append(h2El);
    divEl.append(h3El);
    divEl.append(pEl);
  
    //8. Append the Image and the Text div
    //   to the new section you created in step 1
    sessionEl.append(newImageEl);
    sessionEl.append(divEl);
  
    //Return the new section element created.
    return sessionEl;
  }
  
  /**
   * Generates and returns an array of HTML elements
   * @param {Array} data Team data array
   */
  function generateCardArray(data) {
    const cards = [];
    // {
    //     id: "anna",
    //     fullName: "Anna Kendrick",
    //     jobTitle: "Front-end Ninja",
    //     bio:
    //       "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
    //     avatar: "/session5-takehome/avataaars/annakendrick.svg"
    //   },
    //Add logic to populate `cards` array below
    team.forEach(element => {
        cards.push(generateCard(element.id, element.fullName, element.jobTitle, element.bio, element.avatar))
    });

  
    //Return cards array
    return cards;
  }
  
  const cardsArray = generateCardArray(team);
  
  //Run a loop for the cardsArray and append its elements to content.
  for (let card of cardsArray) {
    content.append(card);
  }
  //Modify Code above this line
  