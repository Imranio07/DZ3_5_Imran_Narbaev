import React, { useState } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { createStore } from 'redux';


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const initialState = {
  name: '',
  age: 0,
  gender: '',
};

const store = createStore(userReducer);

const FormPage = (props) => {
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: userData.name,
    age: userData.age,
    gender: userData.gender,
  });

  const [isDataVisible, setDataVisibility] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    dispatch({ type: 'UPDATE_USER_DATA', payload: formData });
    setDataVisibility(true);
  };

  return (
    <div className={`grid grid-cols-5 gap-5 lg:gap-20 max-w-96 mx-auto ${props.className}`}>
      <h2 className="text-2xl font-bold">{props.title || 'User Information'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleInputChange}
        className="p-2 border rounded"
      />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleInputChange}
        className="p-2 border rounded"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      {isDataVisible && (
        <div>
          <h3 className="text-xl font-semibold mt-4">UserData</h3>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Gender: {formData.gender}</p>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <FormPage />
  </Provider>
);

export default App;
