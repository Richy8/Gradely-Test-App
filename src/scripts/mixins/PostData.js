const PostData = {
    data() {
        return {
            post_data: [{
                    id: 1,
                    type: "Homework",
                    author_img: "",
                    author_name: "Andrew Jackson",
                    time: "2 hrs ago",
                    text: "",
                    img: "",
                    video: "",
                    activity: true,
                    comment: [{
                        comment_author_img: "ChildSqr2.png",
                        comment_author_name: "Ikram Jimoh",
                        comment_body: " I was unable to complete my homework before my daddy collected his phone.",
                        comment_time: "30 minutes ago",
                        comment_like_count: "1",
                        comment_reply_count: "1"
                    }],
                    poll_data: [],
                    event_data: {},
                    homework_data: {
                        title: "Homework title goes here.",
                        subject: "Mathematics",
                        date: "12th April, 2020",
                        time: "3:00 PM"
                    },
                    recommendation_data: []
                },
                {
                    id: 2,
                    type: "Image",
                    author_img: "ChildSqr1.png",
                    author_name: "Rukayat Rufai",
                    time: "3 hrs ago",
                    text: "Here is my attempt at solving the mathematics classwork from the our last class. Hope its clear enough ?",
                    img: "PostImg.png",
                    activity: true,
                    comment: [],
                    poll_data: [],
                    event_data: {},
                    homework_data: {},
                    recommendation_data: []
                },
                {
                    id: 3,
                    type: "Text",
                    author_img: "",
                    author_name: "Francis Sanni",
                    time: "3 hrs ago",
                    text: "<p>This is an example of an announcement for the class. An announcement is posted by the school admin and can only be seen by the target class or individual.</p> <p>It can also have more than a paragraph. In fact, you should use a smart text editor instead of the regular textbox for the input. That way, we will be able to get multiple paragraphs from the post.</p>",
                    img: "",
                    video: "",
                    activity: true,
                    comment: [{
                            comment_author_img: "ChildSqr2.png",
                            comment_author_name: "Ikram Jimoh",
                            comment_body: "I’m afraid this is not a good time for whatever the announcement says. I just need to say that.",
                            comment_time: "30 minutes ago",
                            comment_like_count: "2",
                            comment_reply_count: "1"
                        },
                        {
                            comment_author_img: "ChildSqr6.png",
                            comment_author_name: "Ikechukwu Ogbona",
                            comment_body: "This is unfair",
                            comment_time: "10 minutes ago",
                            comment_like_count: "0",
                            comment_reply_count: "0"
                        }
                    ],
                    poll_data: [],
                    event_data: {},
                    homework_data: {},
                    recommendation_data: []
                },
                {
                    id: 4,
                    type: "Event",
                    author_img: "",
                    author_name: "Andrew Jackson",
                    time: "4 hrs ago",
                    text: "",
                    img: "",
                    video: "",
                    activity: true,
                    comment: [{
                        comment_author_img: "MaleChild.png",
                        comment_author_name: "Saheed Balogun",
                        comment_body: "I may not be able to join the class. I’d probably I have more important things to do.",
                        comment_time: "5 minutes ago",
                        comment_like_count: "0",
                        comment_reply_count: "2"
                    }],
                    poll_data: [],
                    event_data: {
                        title: "Live mathematics class",
                        date: "April 8",
                        time: "1:30 PM",
                        event_url: ""
                    },
                    homework_data: {},
                    recommendation_data: []
                },
                {
                    id: 5,
                    type: "Recommendation",
                    author_img: "",
                    author_name: "Gradely's",
                    time: "4 hrs ago",
                    text: "We recommend that you follow up with the listed students as they seem to be struggling with Number Bases",
                    img: "",
                    video: "",
                    activity: false,
                    comment: [],
                    poll_data: [],
                    event_data: {},
                    homework_data: {},
                    recommendation_data: [{
                            child_img: "MaleChild.png",
                            child_name: "Giwa Omolade",
                            percent: 45
                        },
                        {
                            child_img: "ChildSqr1.png",
                            child_name: "Henry Bakker",
                            percent: 35
                        },
                        {
                            child_img: "ChildSqr2.png",
                            child_name: "Adeboyo Oluwole",
                            percent: 27
                        },
                        {
                            child_img: "ChildSqr3.png",
                            child_name: "Oluwole Carter",
                            percent: 42
                        },
                        {
                            child_img: "ChildSqr4.png",
                            child_name: "Mohammed Isah",
                            percent: 20
                        },
                    ]
                },
                {
                    id: 6,
                    type: "Tutor",
                    author_img: "",
                    author_name: "You",
                    time: "2 hrs ago",
                    text: "",
                    img: "",
                    video: "",
                    activity: false,
                    comment: [],
                    poll_data: [],
                    event_data: {},
                    homework_data: {},
                    recommendation_data: [],
                    tutor_data: {
                        tutor_img: "TutorOne.png",
                        tutor_name: "Oluwatosin Oloko-Obi",
                        tutor_subject: "Mathematics",
                        tutor_sessions: "12"
                    }
                },
                {
                    id: 7,
                    type: "Video",
                    author_img: "",
                    author_name: "Anthony Joshua",
                    time: "4 hrs ago",
                    text: "Please endeavour to study this video",
                    img: "",
                    video: "TestVideo.mp4",
                    activity: false,
                    comment: [],
                    poll_data: [],
                    event_data: {},
                    homework_data: {},
                    recommendation_data: []
                },
                {
                    id: 8,
                    type: "Poll",
                    author_img: "",
                    author_name: "Francis Sanni",
                    time: "3 hrs ago",
                    text: "How many times can you practice mathematics in one day?",
                    img: "",
                    video: "",
                    activity: true,
                    comment: [{
                            comment_author_img: "ChildSqr2.png",
                            comment_author_name: "Ikram Jimoh",
                            comment_body: "I’m afraid this is not a good time for whatever the announcement says. I just need to say that.",
                            comment_time: "30 minutes ago",
                            comment_like_count: "2",
                            comment_reply_count: "1"
                        },
                        {
                            comment_author_img: "ChildSqr6.png",
                            comment_author_name: "Ikechukwu Ogbona",
                            comment_body: "This is unfair",
                            comment_time: "10 minutes ago",
                            comment_like_count: "0",
                            comment_reply_count: "2"
                        }
                    ],
                    poll_data: [{
                            text: "Just once in a day",
                            selected: false,
                            progress: 40
                        },
                        {
                            text: "At least twice a day",
                            selected: false,
                            progress: 20
                        },
                        {
                            text: "As the spirit leads",
                            selected: false,
                            progress: 65
                        },
                        {
                            text: "I don’t even practice",
                            selected: false,
                            progress: 10
                        }
                    ],
                    event_data: {},
                    homework_data: {},
                    recommendation_data: []
                },
            ]
        }
    }
}

export default PostData;