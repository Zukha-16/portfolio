import sanityClient from "../../client";
import { useState, useEffect } from "react";
import "./NotFoundPage.scss";
import { Link } from "react-router-dom";

function NotFoundPage() {
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "header_links"]{
    title, slug, mainImage{ asset->{_id, url}, alt }
  }`
      )
      .then((data) => {
        console.log(typeof data);
        data.forEach((element) => {
          console.log(typeof element.title);
        });
        setPostData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const clickHandler = () => {
    console.log(postData);
  };

  return (
    <div className="not_found_page">
      <main>
        <section>
          <h1>Blog posts</h1>
          <h2>Welcome</h2>
          <div>
            {postData &&
              postData.map((post, index) => {
                return (
                  <article key={index}>
                    <Link
                      to={"/post/" + post.slug.current}
                      key={post.slug.current}
                    >
                      <span>
                        <img
                          src={post.mainImage.asset.url}
                          alt={post.mainImage.alt}
                        />
                        <span>
                          <h3>{post.title}</h3>
                        </span>
                      </span>
                    </Link>
                  </article>
                );
              })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default NotFoundPage;

// import "./NotFoundPage.scss";
// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   // getDocs,
//   addDoc,
//   deleteDoc,
//   doc,
//   onSnapshot,
//   query,
//   // where,
//   orderBy,
//   serverTimestamp,
//   // getDoc,
//   updateDoc,
// } from "firebase/firestore";
// import { useState, useEffect } from "react";

// function NotFoundPage() {
//   const [books, setBooks] = useState([]);
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [id, setId] = useState("");
//   const [id2, setId2] = useState("");
//   const [text, setText] = useState("");

//   const firebaseConfig = {
//     apiKey: "AIzaSyCiwp9xJKx7DdbIhtdhufqpkfBq7vkfJUA",
//     authDomain: "reactportfolio-5017e.firebaseapp.com",
//     projectId: "reactportfolio-5017e",
//     storageBucket: "reactportfolio-5017e.appspot.com",
//     messagingSenderId: "310277429884",
//     appId: "1:310277429884:web:451cb3cabf6b10099447f9",
//     measurementId: "G-ZJVC1QJZDX",
//   };
//   // Initialize and knows what PROJECT it is connected
//   initializeApp(firebaseConfig);

//   // Init service
//   const db = getFirestore();

//   // Collection reference
//   const collectionRef = collection(db, "books");

//   // Queries to filter incoming data
//   // where function sets filter option
//   // orderby can be cutomized by sending document key and desc or asc order
//   const filterHandler = () => {
//     return query(
//       collectionRef,
//       // where("author", "==", "Patrick Rothfuss"),
//       orderBy("title", "desc")
//     );
//   };

//   useEffect(() => {
//     console.log("fetched");

//     // const newRequest = async () => {
//     // Get collection
//     // await getDocs(collectionRef)
//     //   .then((snapshot) => {
//     //     setBooks(
//     //       snapshot.docs.map((book) => ({
//     //         ...book.data(),
//     //         id: book.id,
//     //       }))
//     //     );
//     //   })
//     //   .catch((error) => {
//     //     console.log(error.message);
//     //   });
//     // };
//     // newRequest();

//     const snapshotRequest = () =>
//       onSnapshot(filterHandler(), (snapshot) => {
//         setBooks(
//           snapshot.docs.map((book) => ({
//             ...book.data(),
//             id: book.id,
//           }))
//         );
//       });

//     snapshotRequest();

//     // eslint-disable-next-line
//   }, []);

//   const submitHandler = async (e, action) => {
//     e.preventDefault();
//     if (action === "add") {
//       await addDoc(collectionRef, {
//         title: title,
//         author: author,
//         // adding current time
//         createdAt: serverTimestamp(),
//       }).then(() => {
//         setTitle("");
//         setAuthor("");
//         setId("");
//       });
//     } else if (action === "delete") {
//       // Simgle document reference
//       const documentRef = doc(db, "books", id);
//       // Deleting single document with the following function
//       await deleteDoc(documentRef).then(() => {
//         setId("");
//       });
//     } else if (action === "update") {
//       const documentRef = doc(db, "books", id2);
//       updateDoc(documentRef, {
//         title: text,
//       }).then(() => {
//         setId2("");
//         setText("");
//       });
//     }
//   };

//   const makeDate = (seconds) => {
//     const time = new Date(1970, 0, 1); // Epoch
//     time.setSeconds(seconds);
//     return time;
//   };

//   // Get single document
//   // const getSingleDov = () => {
//   //   const docRef = doc(db, "books", "1zCjTVQ13MNtCvAdPYMn");
//   //   getDoc(docRef).then((res) => {
//   //     console.log(res.data(), res.id);
//   //   });
//   // };

//   return (
//     <div className="not_found_page">
//       <div className="not_found_page_info">
//         <div className="fromGit">
//           <h1>Getting Started with Firebase 9</h1>

//           <h2>Firebase Firestore</h2>

//           <form
//             className="add"
//             onSubmit={(e) => {
//               submitHandler(e, "add");
//             }}
//           >
//             <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               name="author"
//               placeholder="Author"
//               value={author}
//               onChange={(e) => setAuthor(e.target.value)}
//               required
//             />

//             <button>add a new book</button>
//           </form>

//           <form
//             className="delete"
//             onSubmit={(e) => {
//               submitHandler(e, "delete");
//             }}
//           >
//             <input
//               type="text"
//               name="id"
//               placeholder="ID"
//               value={id}
//               onChange={(e) => setId(e.target.value)}
//               required
//             />

//             <button>delete a book</button>
//           </form>
//           <form
//             className="delete"
//             onSubmit={(e) => {
//               submitHandler(e, "update");
//             }}
//           >
//             <input
//               type="text"
//               name="id"
//               placeholder="ID"
//               value={id2}
//               onChange={(e) => setId2(e.target.value)}
//               required
//             />
//             <input
//               type="text"
//               name="text"
//               placeholder="text"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               required
//             />

//             <button>Update</button>
//           </form>
//         </div>

//         {books.length !== 0
//           ? books.map((book) => {
//               return (
//                 <div key={book.id}>
//                   <h1>
//                     {book.title} <span> by </span>
//                     {book.author}. <span>time:</span>
//                     {JSON.stringify(makeDate(book.createdAt.seconds)).slice(
//                       1,
//                       11
//                     )}
//                     ID: {book.id}
//                   </h1>
//                 </div>
//               );
//             })
//           : "Loading..."}
//       </div>
//     </div>
//   );
// }

// export default NotFoundPage;
