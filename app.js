const express = require("express");
const bodyParser= require("body-parser");
const mongoose= require("mongoose");
const { name } = require("ejs");
const app = express();

app.use('/public',express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

let come=0;
let blog=[];
let email=[];
let userdetails=[];
let loggedinusername="";
let title1="Television";
let content1="Television has been an integral part of our lives for decades now. From the black and white screens of the past to the high-definition displays of today, televisions have come a long way. They have revolutionized the way we consume entertainment, news, and information. In this blog, we'll explore the history of television, its impact on society, and its future. Television was invented in the early 20th century. The first electronic television was developed by Philo Farnsworth in 1927. The first public demonstration of television was held in New York City in 1939. Television sets were introduced to the public in the late 1940s, and by the 1950s, they were becoming commonplace in American homes. At first, television was only available in black and white. Color television was introduced in the 1950s but it wasn't until the 1960s that color television sets became affordable for the average consumer. The 1980s saw the introduction of cable and satellite television, which greatly expanded the number of channels available to viewers. In the 1990s, high-definition television was introduced, providing even better picture quality. Television has had a profound impact on society. It has brought the world into our living rooms, allowing us to experience events as they happen. The Vietnam War was the first war to be televised, and this coverage played a significant role in shaping public opinion. Television has also played a role in shaping culture. Popular television shows have introduced new fashion trends, popularized new music, and influenced social norms. Television has also been a powerful force in shaping public opinion. News programs and documentaries have brought attention to important issues and helped to change public policy. Television has also been a valuable educational tool. Educational programs have been developed to teach children about science, history, and other subjects. These programs have been shown to improve academic performance in children.The future of television is bright. With the advent of streaming services, viewers have more choices than ever before. Services like Netflix, Hulu, and Amazon Prime have disrupted traditional television networks, offering viewers a greater variety of programming.Television sets are also becoming smarter. Many new televisions are equipped with internet connectivity, allowing viewers to stream content directly from the internet. Voice-controlled televisions are also becoming more common, making it easier for viewers to find the content they want to watch";
let title2="Social media";
let content2= `Social media are interactive technologies that facilitate the creation and sharing of information, ideas, interests, and other forms of expression through virtual communities and networks. While challenges to the definition of social media arise due to the variety of stand-alone and built-in social media services currently available, there are some common features


User-generated content—such as text posts or comments, digital photos or videos, and data generated through all online interactions—is the lifeblood of social media.
Users create service-specific profiles for the website or app that are designed and maintained by the social media organization.
Social media helps the development of online social networks by connecting a user's profile with those of other individuals or groups.
The term social in regard to media suggests that platforms are user-centric and enable communal activity. As such, social media can be viewed as online facilitators or enhancers of human networks—webs of individuals who enhance social connectivity.[7]

Users usually access social media services through web-based apps on desktops or download services that offer social media functionality to their mobile devices (e.g. smartphones and tablets). As users engage with these electronic services, they create highly interactive platforms in which individuals, communities, and organizations can share, co-create, discuss, participate, and modify user-generated or self-curated content posted online.[8][6][1] Additionally, social media are used to document memories, learn about and explore things, advertise oneself, and form friendships along with the growth of ideas from the creation of blogs, podcasts, videos, and gaming sites.[9] This changing relationship between humans and technology is the focus of the emerging field of technological self-studies.[10] Some of the most popular social media websites, with more than 100 million registered users, include Twitter, Facebook (and its associated Messenger), WeChat, ShareChat, Instagram, QZone, Weibo, VK, Tumblr, Baidu Tieba, and LinkedIn. Depending on interpretation, other popular platforms that are sometimes referred to as social media services include YouTube, QQ, Quora, Telegram, WhatsApp, Signal, LINE, Snapchat, Pinterest, Viber, Reddit, Discord, TikTok, Microsoft Teams, and more. Wikis are examples of collaborative content creation.

Social media outlets differ from traditional media (e.g. print magazines and newspapers, TV, and radio broadcasting) in many ways, including quality,[11] reach, frequency, usability, relevancy, and permanence.[12] Additionally, social media outlets operate in a dialogic transmission system (i.e., many sources to many receivers) while traditional media outlets operate under a monologic transmission model (i.e., one source to many receivers). For instance, a newspaper is delivered to many subscribers, and a radio station broadcasts the same programs to an entire city.[13]

Since the dramatic expansion of the Internet, digital media or digital rhetoric can be used to represent or identify a culture. Studying the rhetoric that exists in the digital environment has become a crucial new process for many scholars.

Observers have noted a wide range of positive and negative impacts when it comes to the use of social media. Social media can help to improve an individual's sense of connectedness with real or online communities and can be an effective communication (or marketing) tool for corporations, entrepreneurs, non-profit organizations, advocacy groups, political parties, and governments. Observers have also seen that there has been a rise in social movements using social media as a tool for communicating and organizing in times of political unrest.

Social media can also be used to read or share news, whether it is true or false.`

let title3="Artificial intelligence";
let content3=`Artificial intelligence (AI) is intelligence—perceiving, synthesizing, and inferring information—demonstrated by machines, as opposed to intelligence displayed by non-human animals or by humans. Example tasks in which this is done include speech recognition, computer vision, translation between (natural) languages, as well as other mappings of inputs.

AI applications include advanced web search engines (e.g., Google Search), recommendation systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI art), automated decision-making, and competing at the highest level in strategic game systems (such as chess and Go).[1]

As machines become increasingly capable, tasks considered to require "intelligence" are often removed from the definition of AI, a phenomenon known as the AI effect.[2] For instance, optical character recognition is frequently excluded from things considered to be AI, having become a routine technology.[3]

Artificial intelligence was founded as an academic discipline in 1956, and in the years since it has experienced several waves of optimism,[4][5] followed by disappointment and the loss of funding (known as an "AI winter"),[6][7] followed by new approaches, success, and renewed funding.[5][8] AI research has tried and discarded many different approaches, including simulating the brain, modeling human problem solving, formal logic, large databases of knowledge, and imitating animal behavior. In the first decades of the 21st century, highly mathematical and statistical machine learning has dominated the field, and this technique has proved highly successful, helping to solve many challenging problems throughout industry and academia.[8][9]

The various sub-fields of AI research are centered around particular goals and the use of particular tools. The traditional goals of AI research include reasoning, knowledge representation, planning, learning, natural language processing, perception, and the ability to move and manipulate objects.[a] General intelligence (the ability to solve an arbitrary problem) is among the field's long-term goals.[10] To solve these problems, AI researchers have adapted and integrated a wide range of problem-solving techniques, including search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, probability, and economics. AI also draws upon computer science, psychology, linguistics, philosophy, and many other fields.

The field was founded on the assumption that human intelligence "can be so precisely described that a machine can be made to simulate it".[b] This raised philosophical arguments about the mind and the ethical consequences of creating artificial beings endowed with human-like intelligence; these issues have previously been explored by myth, fiction, and philosophy since antiquity.[12] Computer scientists and philosophers have since suggested that AI may become an existential risk to humanity if its rational capacities are not steered towards beneficial goals.[c] The term artificial intelligence has also been criticized for overhyping AI's true technological capabilities.`
let like=0;

let topblog=[];
const item1={
    title:title1,
    content:content1,
    social:{
        likes:0,
        comments:[]
       }
};


const item2={
    title:title2,
    content:content2,
    social:{
        likes:0,
        comments:[]
       }
};

const item3={
    title:title3,
    content:content3,
    social:{
        likes:0,
        comments:[]
       }
};


blog.push(item1);
blog.push(item2);
blog.push(item3);

app.get("/blogoff",function(req,res){
    if(blog.length<6){
        res.render('blogoff',{blog1:title1,blog1contents:content1,blog2:title2,blog2contents:content2 ,blog3:title3,blog3contents:content3  })
    }
    else{
        let i=0;
        res.render('blogoff',{blog1:blog[3].title,blog1contents:blog[3].content,blog2:blog[4].title,blog2contents:blog[4].content,blog3:blog[5].title,blog3contents:blog[5].content })
    }
   
});


app.get("/signup",function(req,res){
    res.sendFile(__dirname + "/signup.html");

});


app.post("/signup",function(req,res){

    
    const user={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        comnum:0,
        blog:[]
    }
    userdetails.push(user);
    console.log(userdetails);
    res.redirect('/');
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/login.html");

});

app.get("/profile",function(req,res){
    userdetails.forEach(function(user){
        if(user.name==loggedinusername){
            const name=user.name;
            const email=user.email;
            const blog=user.blog.length;
            const come=user.comnum;
            const blog1=user.blog;

            res.render('profile',{name:name,
                email:email,
                blog:blog,
                come:come,
                blog1:blog1});
        }
    });
   

});

app.post("/profile",function(req,res){
    if(req.body.log=="logout"){
        console.log(loggedinusername);
        loggedinusername="";
        console.log(loggedinusername);
        res.redirect('/');
    }

});



app.post("/",function(req,res){
    console.log("post");
    const username=req.body.name;
    const password=req.body.password;
    userdetails.forEach(function(user){
        if(user.name==username){
            if(user.password==password){
                console.log("Succesful login");
                loggedinusername=username;
                res.redirect("/blogoff");
            }
            else{
                res.redirect("/");
                
            }
        }
    });
    res.redirect("/");

});

app.post("/blogoff",function(req,res){
    if(req.body.bb==="emailsub"){
        const useremail=req.body.useremail;
        email.push(useremail);
        res.redirect('/emailsucess');
     }
});

app.get("/compose",function(req,res){
    res.sendFile(__dirname + "/compose.html");
});

app.post("/compose",function(req,res){
     if(req.body.bb==="blogsub"){
        if(req.body.composeblog.length>=400){
            const item={
                title: req.body.btitle.toUpperCase(),
                content:req.body.composeblog,
                loggeduser:loggedinusername,
                social:{
                 likes:0,
                 commentnum:0,
                 comments:[]
                }    
            }
            console.log(item.loggeduser);
            blog.push(item);
            userdetails.forEach(function(user){
                if(user.name==loggedinusername){
                    const item={
                        title: req.body.btitle.toUpperCase(),
                        content:req.body.composeblog,
                        loggeduser:loggedinusername,
                        social:{
                         likes:0,
                         commentnum:0,
                         comments:[]
                        }  
                    }
                    user.blog.push(item);
                    console.log(user);
                }
                });
            
            res.redirect('/home');
        }
        else{
            res.redirect('/compose');
        }
        
     }
     if(req.body.bb==="emailsub"){
        const useremail=req.body.useremail;
        email.push(useremail);
        res.redirect('/emailsucess');
     }
    
});

app.get("/emailsucess",function(req,res){
    console.log('hi');
    res.sendFile(__dirname+"/emailsucess.html");
});

app.get("/aboutblog",function(req,res){
    res.sendFile(__dirname + "/aboutblog.html");

});

app.post("/aboutblog",function(req,res){
    
    if(req.body.bb==="emailsub"){
       const useremail=req.body.useremail;
       email.push(useremail);
       res.redirect('/emailsucess');
    }
    
});

app.get("/home",function(req,res){
    const day="hi";
    res.render('home',{title1:title1 , content1:content1 ,title2:title2 , content2:content2 ,title3:title3 , content3:content3 ,blog:blog});
   
});

app.post("/home",function(req,res){
    
    if(req.body.bb==="emailsub"){
       const useremail=req.body.useremail;
       email.push(useremail);
       res.redirect('/emailsucess');
    }
    
});
app.get("/:blogtitle",function(req,res){
    const reqtitle=req.params.blogtitle;
    blog.forEach(function(b){
    const existingtitle=b.title;

    if(reqtitle === existingtitle){
    
        res.render('post',{title:b.title,content:b.content,comments:b.social.comments,num:b.social.likes,commentnum:b.social.commentnum}); 


    };
    });
});

app.post("/:blogtitle",function(req,res){
    const reqtitle=req.params.blogtitle;
    blog.forEach(function(b){
    const existingtitle=b.title;

    if(reqtitle === existingtitle){
       const commentorlike=req.body.postin;
       if(commentorlike=="likebutton"){
        console.log(b.social.likes)
        b.social.likes=b.social.likes+1;
        console.log(b.social.likes)

        userdetails.forEach(function(user){
            if(user.name==loggedinusername){
                user.blog.forEach(function(us){
                    if (reqtitle==us.title){
                        us.social.likes=us.social.likes+1;
                    }
                })
            }
            
        });
       }
       if(commentorlike=="commentsubmit"){
        let comment=req.body.commentkaro;
        b.social.comments.push(comment);
        b.social.commentnum=+1;
        const whocomment=b.loggeduser;
        userdetails.forEach(function(user){
            if(user.name==whocomment){
            user.comnum=user.comnum+1;
            user.blog.forEach(function(us){
                if (reqtitle==us.title){
                    us.social.comments.push(comment);
                    us.social.commentnum=us.social.commentnum+1;

                }
            });
            }
        });
       }
       res.redirect('back');
    };
    });
});


app.listen(3000, function(){
    console.log("server has started");
});
