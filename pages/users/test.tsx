<div className="form-group">
<InputText
  name="user_full_name"
  label="Username"
  placeholder="Your Username"
  type="text"
  errors={errors}
  register={register}
  className="w-full"
  defaultValue={data.user_full_name}
/>
</div>

<div className="form-group">
<InputText
  name="user_email"
  label="Email"
  placeholder="Your Email"
  type="email"
  errors={errors}
  register={register}
  className="w-full"
  defaultValue={data.user_email}
/>
</div>

<div className="form-group mt-5">
<label
  htmlFor="password"
  className="block text-lg font-medium"
>
  Type User
</label>

<ListBoxInput
  data={userTypeList}
  selectedValue={userType}
  handleChangeUserType={handleChangeUserType}
/>
</div>

<div className="form-group">
<InputText
  name="user_company_name"
  label="Company Name"
  placeholder="Your Company Name"
  type="text"
  errors={errors}
  register={register}
  className="w-full"
  defaultValue={data.user_company_name}
/>
</div>

<div className="form-group">
<InputText
  name="user_phone_number"
  label="Phone Number"
  placeholder="Your Phone Number"
  type="text"
  errors={errors}
  register={register}
  className="w-full"
  defaultValue={data.user_phone_number}
/>
</div>

{Number(data.usro_role_id) === 4 ? (
<div className="form-group mt-4">
  <label htmlFor="password" className="block text-lg">
    Role Type
  </label>

  <ListBoxInput
    data={rolesList}
    selectedValue={roleUser}
    handleChangeUserType={handleChangeUserRole}
  />

  {/* <input
  type="text"
  className="outline-none border border-spacing-2 border-variant block p-3 mt-2 active:border-blue-700 focus:border-blue-700 active:bg-blue-200 focus:bg-blue-200 rounded w-full"
  value={data.user_company_name}
/> */}
</div>
) : null}
</div>
</div>

<div className="mt-2 p-6">
<h2 className="text-2xl font-bold text-primary">
Profile
</h2>

<hr className="mt-2" />

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 items-center">
<div className="form-group">
<InputText
  name="uspro_national_id"
  label="National ID"
  placeholder="Your National ID"
  type="text"
  errors={errors}
  register={register}
  className="w-full"
  defaultValue={data.uspro_national_id}
/>
</div>

<div className="form-group mt-4">
<label htmlFor="birt_date" className="block">
  Birth Date
</label>
<input
  type="date"
  className="mt-2 p-3 border-2 rounded w-full"
  defaultValue={data.uspro_birt_date}
  {...register("uspro_birt_date")}
/>
</div>

<div className="form-group">
{/* <label htmlFor="password" className="block text-lg">
  Job Title
</label> */}

<InputText
  name="uspro_job_title"
  label="Job Title"
  placeholder="Your Job Title"
  type="text"
  errors={errors}
  register={register}
  className="w-full"
  defaultValue={data.uspro_job_title}
/>

{/* <input
  type="text"
  className="outline-none border border-spacing-2 border-variant block p-3 mt-2 active:border-blue-700 focus:border-blue-700 active:bg-blue-200 focus:bg-blue-200 rounded w-full"
  value={data.user_job_title}
/> */}
</div>

<div className="form-group mt-4">
<label htmlFor="password" className="block text-lg">
  Marital Status
</label>

<ListBoxInput
  data={[
    { label: "Marriage", value: "M" },
    { label: "Single", value: "S" },
  ]}
  selectedValue={userMaritalStatus}
  handleChangeUserType={handleChangeUserMaritalStatus}
/>
{/* <input
type="text"
className="outline-none border border-spacing-2 border-variant block p-3 mt-2 active:border-blue-700 focus:border-blue-700 active:bg-blue-200 focus:bg-blue-200 rounded w-full"
value={data.user_company_name}
/> */}
</div>
<div className="form-group">
<label htmlFor="password" className="block text-lg">
  Gender
</label>

<ListBoxInput
  data={[
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ]}
  selectedValue={userGender}
  handleChangeUserType={handleChangeUserGender}
/>
{/* <input
type="text"
className="outline-none border border-spacing-2 border-variant block p-3 mt-2 active:border-blue-700 focus:border-blue-700 active:bg-blue-200 focus:bg-blue-200 rounded w-full"
value={data.user_phone_number}
/> */}
</div>
</div>