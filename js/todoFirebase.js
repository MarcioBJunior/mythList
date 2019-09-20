firebase.initializeApp(firebaseConfig);

const collection = "todo";

let db = firebase.firestore();

function addTask(task){
    
    db.collection(collection).add(task)
    
};
            

function removeTask(task){
    var documento = db.collection(collection);
    console.log(documento);

   //db.collection(collection).doc()
        
};

function dataRefresh(callback){
     db.collection(collection).onSnapshot(callback);
}