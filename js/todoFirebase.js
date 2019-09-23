firebase.initializeApp(firebaseConfig);

    let collection =  collec;
    let db = firebase.firestore();


function addTask(task){
    
    
    db.collection(collection).doc(task.id).set({
        task
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
   
};
            

function removeTask(task){
   
   
    db.collection(collection).doc(task.task.id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    
        
};

function dataRefresh(callback){
     db.collection(collection).onSnapshot(callback);
}