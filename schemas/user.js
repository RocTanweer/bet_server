export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },

    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },

    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    {
      name: 'profilePicURL',
      title: 'Profile Pic URL',
      type: 'string',
    },
    {
      name: 'profilePic',
      title: 'Profile Pic',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'loginType',
      title: 'Login Type',
      type: 'string',
      options: {
        list: ['manual', 'gOAuth'],
      },
    },
  ],
}
