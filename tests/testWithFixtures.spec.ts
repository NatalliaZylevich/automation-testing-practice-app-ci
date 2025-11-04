import {test} from '../test-options';
import {faker}  from '@faker-js/faker';



test('parameterized methods', async ({ pageManager}) => {
      const randomFullName = faker.person.fullName();
      const randomEmail = `${randomFullName.replace(' ', '').toLowerCase()}${faker.number.int(1000)}@test.com`;

      await pageManager.onFormLayoutsPage().sunbmitUsingTheGridFormWithCredentalsAndSelectionOption('testd@test.com', 'Welcome1', 'Option 2');
      await pageManager.onFormLayoutsPage().submitInlineformWithNameEmailAndCheckbox(randomFullName, randomEmail, false);
     

});