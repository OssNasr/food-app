/*
 *
 * utils.js some css utils for creating UIs fast.
 * author: Osama Nasr
 *
 * Hello, I created this file just to help me add padding, margin, set font size and so on,
 * It's inspired by Bootstrap utils, but customised for ReactNative, and it has only the utilities
 * that I need for this project.
 *
 * USAGE:
 * 
 * p -> padding
 * p0 padding: 0
 * 
 * tPrimary -> text-primary
 * fs1 -> fontSize: 1 * constant value
 * fwBold -> fontWeight: 'Bold'
 * ... etc
 *
 */
export default function sss(styles){
    const sheet = {
        fs0:{fontSize:10},fs1:{fontSize:15},fs2:{fontSize:20},fs3:{fontSize:25},fs4:{fontSize:30},fs5:{fontSize:35},fwNormal:{fontWeight:"normal"},fwBold:{fontWeight:"bold"},fw1:{fontWeight:100},fw2:{fontWeight:200},fw3:{fontWeight:300},fw4:{fontWeight:400},fw5:{fontWeight:500},fw6:{fontWeight:600},fw7:{fontWeight:700},fw8:{fontWeight:800},fw9:{fontWeight:900},tAuto:{textAlign:"auto"},tLeft:{textAlign:"left"},tRight:{textAlign:"right"},tCenter:{textAlign:"center"},tJustify:{textAlign:"justify"},tPrimary:{color:"#0d6efd"},bgPrimary:{backgroundColor:"#0d6efd"},tSecondary:{color:"#6c757d"},bgSecondary:{backgroundColor:"#6c757d"},tSuccess:{color:"#198754"},bgSuccess:{backgroundColor:"#198754"},tInfo:{color:"#0dcaf0"},bgInfo:{backgroundColor:"#0dcaf0"},tWarning:{color:"#ffc107"},bgWarning:{backgroundColor:"#ffc107"},tDanger:{color:"#dc3545"},bgDanger:{backgroundColor:"#dc3545"},tLight:{color:"#f8f9fa"},bgLight:{backgroundColor:"#f8f9fa"},tDark:{color:"#212529"},bgDark:{backgroundColor:"#212529"},tWhite:{color:"#fff"},bgWhite:{backgroundColor:"#fff"},tBlack:{color:"#000"},bgBlack:{backgroundColor:"#000"},tTransparent:{color:"transparent"},bgTransparent:{backgroundColor:"transparent"},rounded0:{borderRadius:4},rounded1:{borderRadius:8},rounded2:{borderRadius:12},rounded3:{borderRadius:16},rounded4:{borderRadius:20},rounded5:{borderRadius:24},m0:{margin:0},p0:{padding:0},b0:{borderWidth:0},m1:{margin:8},p1:{padding:8},b1:{borderWidth:1},m2:{margin:16},p2:{padding:16},b2:{borderWidth:2},m3:{margin:24},p3:{padding:24},b3:{borderWidth:3},m4:{margin:32},p4:{padding:32},b4:{borderWidth:4},m5:{margin:40},p5:{padding:40},b5:{borderWidth:5},bPrimary:{borderColor:"#0d6efd"},bSecondary:{borderColor:"#6c757d"},bSuccess:{borderColor:"#198754"},bInfo:{borderColor:"#0dcaf0"},bWarning:{borderColor:"#ffc107"},bDanger:{borderColor:"#dc3545"},bLight:{borderColor:"#f8f9fa"},bDark:{borderColor:"#212529"},bWhite:{borderColor:"#fff"},bBlack:{borderColor:"#000"},bTransparent:{borderColor:"transparent"},bSolid:{borderStyle:"solid"},bDotted:{borderStyle:"dotted"},bDashed:{borderStyle:"dashed"},mt0:{marginTop:0},pt0:{paddingTop:0},bt0:{borderTopWidth:0},mt1:{marginTop:8},pt1:{paddingTop:8},bt1:{borderTopWidth:1},mt2:{marginTop:16},pt2:{paddingTop:16},bt2:{borderTopWidth:2},mt3:{marginTop:24},pt3:{paddingTop:24},bt3:{borderTopWidth:3},mt4:{marginTop:32},pt4:{paddingTop:32},bt4:{borderTopWidth:4},mt5:{marginTop:40},pt5:{paddingTop:40},bt5:{borderTopWidth:5},btPrimary:{borderTopColor:"#0d6efd"},btSecondary:{borderTopColor:"#6c757d"},btSuccess:{borderTopColor:"#198754"},btInfo:{borderTopColor:"#0dcaf0"},btWarning:{borderTopColor:"#ffc107"},btDanger:{borderTopColor:"#dc3545"},btLight:{borderTopColor:"#f8f9fa"},btDark:{borderTopColor:"#212529"},btWhite:{borderTopColor:"#fff"},btBlack:{borderTopColor:"#000"},btTransparent:{borderTopColor:"transparent"},btSolid:{borderTopStyle:"solid"},btDotted:{borderTopStyle:"dotted"},btDashed:{borderTopStyle:"dashed"},mr0:{marginRight:0},pr0:{paddingRight:0},br0:{borderRightWidth:0},mr1:{marginRight:8},pr1:{paddingRight:8},br1:{borderRightWidth:1},mr2:{marginRight:16},pr2:{paddingRight:16},br2:{borderRightWidth:2},mr3:{marginRight:24},pr3:{paddingRight:24},br3:{borderRightWidth:3},mr4:{marginRight:32},pr4:{paddingRight:32},br4:{borderRightWidth:4},mr5:{marginRight:40},pr5:{paddingRight:40},br5:{borderRightWidth:5},brPrimary:{borderRightColor:"#0d6efd"},brSecondary:{borderRightColor:"#6c757d"},brSuccess:{borderRightColor:"#198754"},brInfo:{borderRightColor:"#0dcaf0"},brWarning:{borderRightColor:"#ffc107"},brDanger:{borderRightColor:"#dc3545"},brLight:{borderRightColor:"#f8f9fa"},brDark:{borderRightColor:"#212529"},brWhite:{borderRightColor:"#fff"},brBlack:{borderRightColor:"#000"},brTransparent:{borderRightColor:"transparent"},brSolid:{borderRightStyle:"solid"},brDotted:{borderRightStyle:"dotted"},brDashed:{borderRightStyle:"dashed"},mb0:{marginBottom:0},pb0:{paddingBottom:0},bb0:{borderBottomWidth:0},mb1:{marginBottom:8},pb1:{paddingBottom:8},bb1:{borderBottomWidth:1},mb2:{marginBottom:16},pb2:{paddingBottom:16},bb2:{borderBottomWidth:2},mb3:{marginBottom:24},pb3:{paddingBottom:24},bb3:{borderBottomWidth:3},mb4:{marginBottom:32},pb4:{paddingBottom:32},bb4:{borderBottomWidth:4},mb5:{marginBottom:40},pb5:{paddingBottom:40},bb5:{borderBottomWidth:5},bbPrimary:{borderBottomColor:"#0d6efd"},bbSecondary:{borderBottomColor:"#6c757d"},bbSuccess:{borderBottomColor:"#198754"},bbInfo:{borderBottomColor:"#0dcaf0"},bbWarning:{borderBottomColor:"#ffc107"},bbDanger:{borderBottomColor:"#dc3545"},bbLight:{borderBottomColor:"#f8f9fa"},bbDark:{borderBottomColor:"#212529"},bbWhite:{borderBottomColor:"#fff"},bbBlack:{borderBottomColor:"#000"},bbTransparent:{borderBottomColor:"transparent"},bbSolid:{borderBottomStyle:"solid"},bbDotted:{borderBottomStyle:"dotted"},bbDashed:{borderBottomStyle:"dashed"},ml0:{marginLeft:0},pl0:{paddingLeft:0},bl0:{borderLeftWidth:0},ml1:{marginLeft:8},pl1:{paddingLeft:8},bl1:{borderLeftWidth:1},ml2:{marginLeft:16},pl2:{paddingLeft:16},bl2:{borderLeftWidth:2},ml3:{marginLeft:24},pl3:{paddingLeft:24},bl3:{borderLeftWidth:3},ml4:{marginLeft:32},pl4:{paddingLeft:32},bl4:{borderLeftWidth:4},ml5:{marginLeft:40},pl5:{paddingLeft:40},bl5:{borderLeftWidth:5},blPrimary:{borderLeftColor:"#0d6efd"},blSecondary:{borderLeftColor:"#6c757d"},blSuccess:{borderLeftColor:"#198754"},blInfo:{borderLeftColor:"#0dcaf0"},blWarning:{borderLeftColor:"#ffc107"},blDanger:{borderLeftColor:"#dc3545"},blLight:{borderLeftColor:"#f8f9fa"},blDark:{borderLeftColor:"#212529"},blWhite:{borderLeftColor:"#fff"},blBlack:{borderLeftColor:"#000"},blTransparent:{borderLeftColor:"transparent"},blSolid:{borderLeftStyle:"solid"},blDotted:{borderLeftStyle:"dotted"},blDashed:{borderLeftStyle:"dashed"},mv0:{marginVertical:0},pv0:{paddingVertical:0},mv1:{marginVertical:8},pv1:{paddingVertical:8},mv2:{marginVertical:16},pv2:{paddingVertical:16},mv3:{marginVertical:24},pv3:{paddingVertical:24},mv4:{marginVertical:32},pv4:{paddingVertical:32},mv5:{marginVertical:40},pv5:{paddingVertical:40},mh0:{marginHorizontal:0},ph0:{paddingHorizontal:0},mh1:{marginHorizontal:8},ph1:{paddingHorizontal:8},mh2:{marginHorizontal:16},ph2:{paddingHorizontal:16},mh3:{marginHorizontal:24},ph3:{paddingHorizontal:24},mh4:{marginHorizontal:32},ph4:{paddingHorizontal:32},mh5:{marginHorizontal:40},ph5:{paddingHorizontal:40},w25:{width:"25%"},w50:{width:"50%"},w75:{width:"75%"},w100:{width:"100%"},row:{flexDirection:"row"},column:{flexDirection:"column"},jcStart:{justifyContent:"flex-start"},jcEnd:{justifyContent:"flex-end"},jcCenter:{justifyContent:"center"},jcAround:{justifyContent:"space-around"},jcBetween:{justifyContent:"space-between"},jcEvenly:{justifyContent:"space-evenly"},aiStart:{alignItems:"flex-start"},aiEnd:{alignItems:"flex-end"},aiCenter:{alignItems:"center"},aiStretch:{alignItems:"stretch"},aiBaseline:{alignItems:"baseline"},f1:{flex:1},f2:{flex:2},f3:{flex:3},f4:{flex:4},f5:{flex:5},f6:{flex:6},f7:{flex:7},f8:{flex:8},f9:{flex:9},f10:{flex:10},f11:{flex:11},f12:{flex:12},shadowPrimary1:{elevation:3,shadowColor:"#0d6efd"},shadowSecondary1:{elevation:3,shadowColor:"#6c757d"},shadowSuccess1:{elevation:3,shadowColor:"#198754"},shadowInfo1:{elevation:3,shadowColor:"#0dcaf0"},shadowWarning1:{elevation:3,shadowColor:"#ffc107"},shadowDanger1:{elevation:3,shadowColor:"#dc3545"},shadowLight1:{elevation:3,shadowColor:"#f8f9fa"},shadowDark1:{elevation:3,shadowColor:"#212529"},shadowWhite1:{elevation:3,shadowColor:"#fff"},shadowBlack1:{elevation:3,shadowColor:"#000"},shadowTransparent1:{elevation:3,shadowColor:"transparent"},shadowPrimary2:{elevation:6,shadowColor:"#0d6efd"},shadowSecondary2:{elevation:6,shadowColor:"#6c757d"},shadowSuccess2:{elevation:6,shadowColor:"#198754"},shadowInfo2:{elevation:6,shadowColor:"#0dcaf0"},shadowWarning2:{elevation:6,shadowColor:"#ffc107"},shadowDanger2:{elevation:6,shadowColor:"#dc3545"},shadowLight2:{elevation:6,shadowColor:"#f8f9fa"},shadowDark2:{elevation:6,shadowColor:"#212529"},shadowWhite2:{elevation:6,shadowColor:"#fff"},shadowBlack2:{elevation:6,shadowColor:"#000"},shadowTransparent2:{elevation:6,shadowColor:"transparent"},shadowPrimary3:{elevation:9,shadowColor:"#0d6efd"},shadowSecondary3:{elevation:9,shadowColor:"#6c757d"},shadowSuccess3:{elevation:9,shadowColor:"#198754"},shadowInfo3:{elevation:9,shadowColor:"#0dcaf0"},shadowWarning3:{elevation:9,shadowColor:"#ffc107"},shadowDanger3:{elevation:9,shadowColor:"#dc3545"},shadowLight3:{elevation:9,shadowColor:"#f8f9fa"},shadowDark3:{elevation:9,shadowColor:"#212529"},shadowWhite3:{elevation:9,shadowColor:"#fff"},shadowBlack3:{elevation:9,shadowColor:"#000"},shadowTransparent3:{elevation:9,shadowColor:"transparent"},shadowPrimary4:{elevation:12,shadowColor:"#0d6efd"},shadowSecondary4:{elevation:12,shadowColor:"#6c757d"},shadowSuccess4:{elevation:12,shadowColor:"#198754"},shadowInfo4:{elevation:12,shadowColor:"#0dcaf0"},shadowWarning4:{elevation:12,shadowColor:"#ffc107"},shadowDanger4:{elevation:12,shadowColor:"#dc3545"},shadowLight4:{elevation:12,shadowColor:"#f8f9fa"},shadowDark4:{elevation:12,shadowColor:"#212529"},shadowWhite4:{elevation:12,shadowColor:"#fff"},shadowBlack4:{elevation:12,shadowColor:"#000"},shadowTransparent4:{elevation:12,shadowColor:"transparent"},shadowPrimary5:{elevation:15,shadowColor:"#0d6efd"},shadowSecondary5:{elevation:15,shadowColor:"#6c757d"},shadowSuccess5:{elevation:15,shadowColor:"#198754"},shadowInfo5:{elevation:15,shadowColor:"#0dcaf0"},shadowWarning5:{elevation:15,shadowColor:"#ffc107"},shadowDanger5:{elevation:15,shadowColor:"#dc3545"},shadowLight5:{elevation:15,shadowColor:"#f8f9fa"},shadowDark5:{elevation:15,shadowColor:"#212529"},shadowWhite5:{elevation:15,shadowColor:"#fff"},shadowBlack5:{elevation:15,shadowColor:"#000"},shadowTransparent5:{elevation:15,shadowColor:"transparent"},overflowVisible:{overflow:"visible"},overflowHidden:{overflow:"hidden"},overflowScroll:{overflow:"scroll"}
    }
    let result = {};
    for (let style of styles.split(' '))
        result = {...result, ...sheet[style]};

    return result;
}
