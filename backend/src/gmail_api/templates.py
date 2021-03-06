# Sample Response Templates
def get_templates(template_type):
    '''
    input:
    - template_type

    output:
    - template_str
    '''
    switcher = {

        'order-completed': 'email_templates/order-completed.html',
        'testhtml': 'email_templates/testhtml.html'

    }
    template_path = switcher.get(template_type, 'email_templates/error.txt')
    with open(template_path) as f:
        raw_template_str = f.read()

    return raw_template_str
