import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AllVotersScreen from './AllVotersScreen';
import candidate from './Candidate';
import SearchOptions from './SearchOptions';
import SearchScreen from './SearchScreen';
import ItemDetails from './ItemDetails';
import SearchBy124 from './SearchBy124';
import SearchBy125 from './SearchBy125';
import SearchBy126 from './searchBy126';
import SearchBy127 from './searchBy127';
import SearchBy128 from './SearchBy128';
import Booth124Multi from './Booth124Multi';
import Booth124Male from './Booth124Male';
import Booth124Female from './Booth124Female';
import Booth124I from './Booth124I';
import Booth124S from './Booth124S';
import Booth125Multi from './Booth125Multi';
import Booth125Male from './Booth125Male';
import Booth125Female from './Booth125Female';
import Booth125I from './Booth125I';
import Booth125S from './Booth125S';
import Booth126Multi from './Booth126Multi';
import Booth126Male from './Booth126Male';
import Booth126Female from './Booth126Female';
import Booth126I from './Booth126I';
import Booth126S from './Booth126S';
import Booth127Multi from './Booth127Multi';
import Booth127Male from './Booth127Male';
import Booth127Female from './Booth127Female';
import Booth127I from './Booth127I';
import Booth127S from './Booth127S';
import Booth128Multi from './Booth128Multi';
import Booth128Male from './Booth128Male';
import Booth128Female from './Booth128Female';
import Booth128I from './Booth128I';
import Booth128S from './Booth128S';
import AnalysisOptions from './AnalysisOptions';
import Booth124Analysis from './Booth124Analysis';
import Booth125Analysis from './Booth125Analysis';
import Booth126Analysis from './Booth126Analysis';
import Booth127Analysis from './Booth127Analysis';
import Booth128Analysis from './Booth128Analysis';
import B124relRep from './B124religionReport';
import B124gendRep from './B124genderReport';
import B125gendRep from './B125genderReport';
import B126gendRep from './B126genderReport';
import B127gendRep from './B127genderReport';
import B128gendRep from './B128genderReport';
import B125relRep from './B125religionReport';
import B126relRep from './B126religionReport';
import B127relRep from './B127religionReport';
import B128relRep from './B128religionReport';
import Allgendrep from './AllGendReport';
import AllReports from './AllReports';
import AllrelRep from './AllRelReport';
import ItemDetails124 from './Both124VoterDetail';
import ItemDetails125 from './Both125VoterDetail';
import ItemDetails126 from './Both126VoterDetail';
import ItemDetails127 from './Both127VoterDetail';
import ItemDetails128 from './Both128VoterDetail';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "LoginScreen" component={LoginScreen}
                options = {{title: "Visir", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name = "Home" component={HomeScreen}
                options = {{title: "Visir", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name = "Search Options" component={SearchOptions}
                options = {{title: "Search By", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name = "Analysis Options" component={AnalysisOptions}
                options = {{title: "Analysis Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name = "All Voters" component={AllVotersScreen}
                 options = {{title: "All Voters List", headerStyle: {backgroundColor:'#38B6FF'},
                 headerTintColor:"white", 
                 headerTitleStyle:'bold'}}/>
                <Stack.Screen name="candidate" component={candidate} 
                options = {{ title : "Visir",headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Search Screen" component={SearchScreen} 
                options = {{title: "Search Voter", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth124 Multi" component={Booth124Multi} 
                options = {{title: "Booth 124", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth125 Multi" component={Booth125Multi} 
                options = {{title: "Booth 125", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth126 Multi" component={Booth126Multi} 
                options = {{title: "Booth 126", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth127 Multi" component={Booth127Multi} 
                options = {{title: "Booth 127", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth128 Multi" component={Booth128Multi} 
                options = {{title: "Booth 128", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Search 124" component={SearchBy124} 
                options = {{title: "Booth no 124", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="124 Male" component={Booth124Male} 
                options = {{title: "Male Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="125 Male" component={Booth125Male} 
                options = {{title: "Male Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="126 Male" component={Booth126Male} 
                options = {{title: "Male Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="127 Male" component={Booth127Male} 
                options = {{title: "Male Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="128 Male" component={Booth128Male} 
                options = {{title: "Male Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="124 Female" component={Booth124Female} 
                options = {{title: "Female Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="125 Female" component={Booth125Female} 
                options = {{title: "Female Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="126 Female" component={Booth126Female} 
                options = {{title: "Female Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="127 Female" component={Booth127Female} 
                options = {{title: "Female Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="128 Female" component={Booth128Female} 
                options = {{title: "Female Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="124Muslims" component={Booth124I} 
                options = {{title: "Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="125Muslims" component={Booth125I} 
                options = {{title: "Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="126Muslims" component={Booth126I} 
                options = {{title: "Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="127Muslims" component={Booth127I} 
                options = {{title: "Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="128Muslims" component={Booth128I} 
                options = {{title: "Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="124NonMuslim" component={Booth124S} 
                options = {{title: "Non Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="125NonMuslim" component={Booth125S} 
                options = {{title: "Non Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="126NonMuslim" component={Booth126S} 
                options = {{title: "Non Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="127NonMuslim" component={Booth127S} 
                options = {{title: "Non Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="128NonMuslim" component={Booth128S} 
                options = {{title: "Non Muslim Voters", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Search 125" component={SearchBy125} 
                options = {{title: "Booth no 125", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Search 126" component={SearchBy126} 
                options = {{title: "Booth no 126", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Search 127" component={SearchBy127} 
                options = {{title: "Booth no 127", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Search 128" component={SearchBy128} 
                options = {{title: "Booth no 128", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 124 Analysis" component={Booth124Analysis} 
                options = {{title: "Booth 124 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 125 Analysis" component={Booth125Analysis} 
                options = {{title: "Booth 125 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 126 Analysis" component={Booth126Analysis} 
                options = {{title: "Booth 126 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 127 Analysis" component={Booth127Analysis} 
                options = {{title: "Booth 127 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 128 Analysis" component={Booth128Analysis} 
                options = {{title: "Booth 128 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 124 religion" component={B124relRep} 
                options = {{title: "Booth 124 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 124 gender" component={B124gendRep} 
                options = {{title: "Booth 124 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 125 gender" component={B125gendRep} 
                options = {{title: "Booth 125 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 126 gender" component={B126gendRep} 
                options = {{title: "Booth 126 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 127 gender" component={B127gendRep} 
                options = {{title: "Booth 127 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 128 gender" component={B128gendRep} 
                options = {{title: "Booth 128 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 125 religion" component={B125relRep} 
                options = {{title: "Booth 125 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 126 religion" component={B126relRep} 
                options = {{title: "Booth 126 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 127 religion" component={B127relRep} 
                options = {{title: "Booth 127 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="Booth 128 religion" component={B128relRep} 
                options = {{title: "Booth 128 Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="All gender Report" component={Allgendrep} 
                options = {{title: "Overall Gender Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="All religion Report" component={AllrelRep} 
                options = {{title: "Overall Religion Report", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="All Reports" component={AllReports} 
                options = {{title: "Overall Reports", headerStyle: {backgroundColor:'#38B6FF'},
                headerTintColor:"white", 
                headerTitleStyle:'bold'}}/>
                <Stack.Screen name="ItemDetails" component={ItemDetails}
                 options = {{title: "Voter Details", headerStyle: {backgroundColor:'#38B6FF'},
                 headerTintColor:"white", 
                 headerTitleStyle:'bold'}}/>
                <Stack.Screen name="ItemDetails124" component={ItemDetails124}
                 options = {{title: "124 Voter Details", headerStyle: {backgroundColor:'#38B6FF'},
                 headerTintColor:"white", 
                 headerTitleStyle:'bold'}}/>
                <Stack.Screen name="ItemDetails125" component={ItemDetails125}
                 options = {{title: "125 Voter Details", headerStyle: {backgroundColor:'#38B6FF'},
                 headerTintColor:"white", 
                 headerTitleStyle:'bold'}}/>
                <Stack.Screen name="ItemDetails126" component={ItemDetails126}
                 options = {{title: "126 Voter Details", headerStyle: {backgroundColor:'#38B6FF'},
                 headerTintColor:"white", 
                 headerTitleStyle:'bold'}}/>
                <Stack.Screen name="ItemDetails127" component={ItemDetails127}
                 options = {{title: "127 Voter Details", headerStyle: {backgroundColor:'#38B6FF'},
                 headerTintColor:"white", 
                 headerTitleStyle:'bold'}}/>
                <Stack.Screen name="ItemDetails128" component={ItemDetails128}
                 options = {{title: "128 Voter Details", headerStyle: {backgroundColor:'#38B6FF'},
                 headerTintColor:"white", 
                 headerTitleStyle:'bold'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;