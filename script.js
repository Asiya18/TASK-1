document.addEventListener("DOMContentLoaded", function () {
    const jsonData = {
        "title": "Technical Project Management",
        "short_description": "You can learn project management by applying the simple methods of project management.",
        "tasks": [
            {
                "task_title": "Explore the world of management",
                "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion.",
                "assets": [
                    {
                        "asset_title": "Technical Project Management",
                        "asset_description": "Story of Alignment, Scope of Agility, Specific Accountable, Staggering Approach",
                        "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                        "asset_type": "display_asset",
                        "asset_content_type": "video"
                    },
                    {
                        "asset_title": "Threadbuild",
                        "asset_description": "Watch the video and threadbuild, jot out key threads while watching the video.",
                        "asset_type": "input_asset",
                        "asset_content_type": "threadbuilder"
                    },
                    {
                        "asset_title": "Structure your Pointers",
                        "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning.",
                        "asset_type": "input_asset",
                        "asset_content_type": "article"
                    },
                    {
                        "asset_title": "4SA Method",
                        "asset_description": "To explore more read more",
                        "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                        "asset_type": "display_asset",
                        "asset_content_type": "article"
                    }
                ]
            }
        ]
    };

    // Insert Project Title
    document.querySelector(".project-management").textContent = jsonData.title;

    // Insert Task Title and Description
    document.querySelector(".title").textContent = jsonData.tasks[0].task_title;
    document.querySelector(".content").textContent = jsonData.tasks[0].task_description;

    // Insert Card 1 Data (Video)
    const card1 = document.querySelector(".card1");
    card1.querySelector(".card1-title span").textContent = jsonData.tasks[0].assets[0].asset_title;
    card1.querySelector(".card1-description").innerHTML = `<span class="bold-text">Description:</span> ${jsonData.tasks[0].assets[0].asset_description}`;
    
    // Insert YouTube Video
    const videoIframe = document.createElement("iframe");
    videoIframe.src = jsonData.tasks[0].assets[0].asset_content;
    videoIframe.width = "100%";
    videoIframe.height = "200px";
    card1.querySelector(".card1-content").appendChild(videoIframe);

    // Insert Card 2 Data (Threadbuild)
    const card2 = document.querySelector(".card2");
    card2.querySelector(".card2-title span").textContent = jsonData.tasks[0].assets[1].asset_title;
    card2.querySelector(".card2-description").innerHTML = `<span class="bold-text">Description:</span> ${jsonData.tasks[0].assets[1].asset_description}`;

    // Insert Card 3 Data (Article Writing)
    const card3 = document.querySelector(".card3");
    card3.querySelector(".card3-title span").textContent = jsonData.tasks[0].assets[2].asset_title;
    card3.querySelector(".card3-description").innerHTML = `<span class="bold-text">Description:</span> ${jsonData.tasks[0].assets[2].asset_description}`;

    // Insert Card 4 Data (4SA Method)
    const card4 = document.querySelector(".card4");
    card4.querySelector(".card4-title span").textContent = jsonData.tasks[0].assets[3].asset_title;
    card4.querySelector(".card4-description").innerHTML = `<span class="bold-text">Description:</span> ${jsonData.tasks[0].assets[3].asset_description}`;

    // Add link to the 4SA Method
    const fourSALink = document.createElement("a");
    fourSALink.href = jsonData.tasks[0].assets[3].asset_content;
    fourSALink.target = "_blank";
    card4.appendChild(fourSALink);
});


function toggleMenu() {
    const board = document.querySelector('.journey-board');
    const content = document.querySelector('.journey-board-title');
    const span = content.querySelector('span');


    board.classList.toggle('active');
    if (board.classList.contains('active')) {
        span.style.display = 'none';
        content.style.width = '52px';
        board.style.width = '50px';
    } else {
        span.style.display = 'block';
        content.style.width = '302px';
        board.style.width = '300px'; 
    }
}

function noticemenu() {
    const board = document.querySelector('.notice-board');
    const content = document.querySelector('.notice-board-title');
    const text = document.querySelector('span');

    board.classList.toggle('active');

    if (board.classList.contains('active')) {
        text.style.opacity = '0'; 
        content.style.width = '40px';
        board.style.width = '40px';
    } else {
        text.style.opacity = '1';
        content.style.width = '40px';
        board.style.width = '300px';
    }
}
