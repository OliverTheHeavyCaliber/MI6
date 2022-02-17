import {useState} from "react"
import axios from 'axios';

export default function MissionEditForm() {
    const [values, setValues] = useState(
        {
            name: '',
            year: '2021',
            outcome: ''
        }
    )

    const [success, setSuccess] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('form is being submited');

        setErrors({});

        try{
            const response = await axios.post('/api/mission', values);

            // stops here and wait for response from ajax request
            console.log(response.data);

            setSuccess('Mission successfuly saved');
            setValues({
                name: '',
                year: '2021',
                outcome: ''
            })

        }catch(error){
            console.log('something went wrong');
            console.log(error.message);
            console.log(error.response);

            setErrors(error.response.data.errors);


            // here comes the code which will be executed on failure
            // alert(error.response.data.errors['name'][0]);
        }
    }

    return (
        <form className="mission-edit-form"
              action="" method="post" onSubmit={handleSubmit}>

            {
                success && <p>{success}</p>
            }

            <div className="mission-edit-form__form-group">

                <label className="mission-edit-form__label">
                    Name:
                </label>

                <input type="text" name="name" value={ values.name } onChange={ handleChange } />
                {
                    errors.name && (
                        <p>{errors.name}</p>
                    )
                }

            </div>

            <div className="mission-edit-form__form-group">

                <label className="mission-edit-form__label">
                    Year:
                </label>

                <input type="text" name="year" value={ values.year } onChange={ handleChange } />

            </div>

            <div className="mission-edit-form__form-group">

                <label className="mission-edit-form__label">
                    Outcome:
                </label>

                <select name="outcome" value={ values.outcome } onChange={ handleChange }>
                    <option value="">--- choose one ---</option>
                    <option value="in-progress">In progress</option>
                    <option value="success">Success</option>
                    <option value="failure">Failure</option>
                </select>

            </div>

            <div className="mission-edit-form__form-group">

                <button>Save the mission</button>

            </div>

        </form>

    )
}
