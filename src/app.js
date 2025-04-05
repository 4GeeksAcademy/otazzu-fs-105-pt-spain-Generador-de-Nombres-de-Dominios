
window.onload = function() {
  //write your code here
  const pronom = ['the', 'our']
  const adj = ['great', 'mountain']
  const nombre = ['cali', 'knight']
  const domian = ['.com', '.net']

  // loop con for

  // for(let a = 0; a < pronom.length; a++){
  //   for(let b = 0; b < adj.length; b++){
  //     for(let c = 0; c < nombre.length; c++){
  //       for(let d = 0; d < domian.length; d++){
  //         console.log(pronom[a],adj[b],nombre[c],domian[d])
  //       }
  //     }
  //   }
  // }

  // loop con foreach

  pronom.forEach ((pro)=>{
    adj.forEach((adje)=>{
      nombre.forEach((nom)=>{
        domian.forEach((dom)=>{
          console.log(pro,adje,nom,dom)
        })
      })
    })
  })
}
