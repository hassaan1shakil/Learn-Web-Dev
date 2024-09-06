function createCard(title, channel_name, views, months_old, duration, img_link){

    // Create Card Container
    
    card = document.createElement("div");
    card.setAttribute("class", "card");

    // Add Elements in the Card

    // 1) Thumbnail

    thumbnail = document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail");

    // Add img && duration in the thumbnail

    thumbnail.innerHTML = `<img class="thumnail-img " src="${img_link}"
    alt="thumbnail">`

    video_length = document.createElement("span");
    video_length.setAttribute("class", "duration");
    video_length.innerText = duration; 

    thumbnail.append(video_length);

    // 2) Text

    text = document.createElement("div");
    text.setAttribute("class", "text");

    // Title

    video_title = document.createElement("p");
    video_title.setAttribute("class", "title");
    video_title.innerText = title;

    // Channel Name

    channel = document.createElement("span");
    channel.setAttribute("class", "channel-name");
    channel.innerHTML = channel_name;

    // Views

    view_count = document.createElement("span");
    view_count.setAttribute("class", "views");

    if (views < 1000){
        view_count.innerText = `${views} views`;
    }

    else if (views < 10000){
        views = (views / 1000).toPrecision(2);
        view_count.innerText = `${views}K views`;
    }

    else if (views < 1000000){
        views = Math.floor(views / 1000);
        view_count.innerText = `${views}K views`;
    }

    else if (views < 100000000){
        views = (views / 1000000).toPrecision(2);
        view_count.innerText = `${views}M views`;
    }

    else if (views < 1000000000){
        views = Math.floor(views / 1000000);
        view_count.innerText = `${views}M views`;
    }

    else{
        views = (views / 1000000000).toPrecision(2);
        view_count.innerText = `${views}B views`;
    }

    // Date

    date = document.createElement("span");
    date.setAttribute("class", "months");
    date.innerText = months_old + " months ago";

    text.append(video_title);
    text.append(channel);
    text.append(view_count);
    text.append(date);


    // Adding Thumbnail & Text to Card Container

    card.append(thumbnail);
    card.append(text);

    return card;
}

let video = createCard("The Perfect Car doesn't exist...", "ReDriven", 747000, 2, "10:01", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvLHSQNGAB1RJVNtDavx0XhhXMKA-rTnPUw&s");

document.querySelector(".container").append(video);


video = createCard("Minimalism: Has it Gone Too Far?", "Matt D'Avella", 2530000, 7, "12:12", "https://paktbags.com/cdn/shop/articles/Pakt_One_Matt_Pack_0009_DSC04122_SQ.jpg?v=1533160169");

document.querySelector(".container").append(video);


video = createCard("The Best of House M.D | Fan Picks", "House M.D", 4507656, 11, "13:15", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI4rNgA1uiysryOM4aHR8aCEy3qpdnseD6A&s");

document.querySelector(".container").append(video);


video = createCard("iPhone 16 Pro Unboxing | EAP", "EverythingApplePro", 6430000, 3, "9:41", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzh5L1F66JJ3YGwt1SJ8LfvnNiNEsl24BFGP3N9UuhOWoYor-8Na8HEoXItENMsgVGQY&usqp=CAU");

document.querySelector(".container").append(video);


video = createCard("Escaping To Japan's Secret Paradise *Okinawa*", "PewDiePie", 2300000, 4, "16:14", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpyrsHoENDyYusdDhl7l-OT7OC824GbGNpQ&s");

document.querySelector(".container").append(video);


video = createCard("Fixing My Abandoned Project Car - BIGTIME", "BigTime", 1430000, 2, "20:25", "https://i.ytimg.com/vi/mrHiZrtn5c0/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDs0Ql7dbnk_J9SYst162Q_VWiPrg");

document.querySelector(".container").append(video);

