import { useForm } from 'react-hook-form'

interface FormValues {
  name: string
  email: string
  phone: string
  category: string
  otherCategory: string
  pax: string
  eventType: string
  eventDate: string
  address: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[0-9]{7,12}$/
const MAX_PAX = 100000
const MAX_DESCRIPTION_WORDS = 1500
const MAX_ADDRESS_LENGTH = 500

function todayISODate() {
  return new Date().toISOString().split('T')[0]
}

function maxEventISODate() {
  const date = new Date()
  date.setFullYear(date.getFullYear() + 5)
  return date.toISOString().split('T')[0]
}

function countWords(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0
}

const inputBaseClasses =
  'rounded-(--radius-md) border bg-(--color-background) px-3 py-2 text-(length:--font-size-sm) text-(--color-text-primary) outline-none transition-colors focus:border-(--color-secondary)'
const inputClasses = `w-full ${inputBaseClasses}`

function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      category: '',
      otherCategory: '',
      pax: '',
      eventType: '',
      eventDate: '',
      address: '',
    },
  })

  // react-hook-form's watch() can't be proven stable for the compiler, but nothing here
  // is passed to a memoized child/hook, so there's no staleness risk to guard against.
  // eslint-disable-next-line react-hooks/incompatible-library
  const category = watch('category')
  const otherCategory = watch('otherCategory')
  const address = watch('address')

  const onSubmit = () => {
    // No backend exists yet; this simply confirms a valid submission.
  }

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface) px-6 py-10 text-center shadow-sm">
        <h2 className="text-(length:--font-size-xl) font-(--font-weight-semibold) font-(family-name:--font-family-heading) text-(--color-primary)">
          Thank you!
        </h2>
        <p className="max-w-prose text-(length:--font-size-md) text-(--color-text-secondary)">
          We've received your quote request and will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-2 text-(length:--font-size-sm) font-(--font-weight-semibold) text-(--color-secondary) underline"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full max-w-5xl grid-cols-1 gap-4 rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface) px-5 py-8 text-left shadow-sm sm:grid-cols-3 sm:px-8 sm:py-10"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          maxLength={100}
          {...register('name', {
            required: 'Name is required.',
            minLength: { value: 2, message: 'Name must be at least 2 characters.' },
            maxLength: { value: 100, message: 'Name must not exceed 100 characters.' },
          })}
          className={`${inputClasses} ${errors.name ? 'border-red-500' : 'border-(--color-border)'}`}
        />
        {errors.name && <span className="text-(length:--font-size-xs) text-red-600">{errors.name.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          maxLength={120}
          {...register('email', {
            required: 'Email is required.',
            pattern: { value: EMAIL_REGEX, message: 'Enter a valid email address.' },
            maxLength: { value: 120, message: 'Email must not exceed 120 characters.' },
          })}
          className={`${inputClasses} ${errors.email ? 'border-red-500' : 'border-(--color-border)'}`}
        />
        {errors.email && <span className="text-(length:--font-size-xs) text-red-600">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
          Phone Number <span className="text-red-600">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          maxLength={12}
          {...register('phone', {
            required: 'Phone number is required.',
            pattern: { value: PHONE_REGEX, message: 'Enter a valid phone number (7-12 digits).' },
          })}
          className={`${inputClasses} ${errors.phone ? 'border-red-500' : 'border-(--color-border)'}`}
        />
        {errors.phone && <span className="text-(length:--font-size-xs) text-red-600">{errors.phone.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="category" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
          Category <span className="text-red-600">*</span>
        </label>
        <select
          id="category"
          {...register('category', { required: 'Please select a category.' })}
          className={`${inputClasses} ${errors.category ? 'border-red-500' : 'border-(--color-border)'}`}
        >
          <option value="">Select a category</option>
          <option value="School Meals">School Meals</option>
          <option value="Office Meals">Office Meals</option>
          <option value="Other">Other</option>
        </select>
        {errors.category && (
          <span className="text-(length:--font-size-xs) text-red-600">{errors.category.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="pax" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
          Number of Pax
        </label>
        <input
          id="pax"
          type="number"
          min="1"
          max={MAX_PAX}
          {...register('pax', {
            validate: (value) => {
              if (!value) return true
              if (!/^\d+$/.test(value) || Number(value) <= 0) return 'Enter a valid number greater than 0.'
              if (Number(value) > MAX_PAX) return `Number of pax cannot exceed ${MAX_PAX.toLocaleString('en-IN')}.`
              return true
            },
          })}
          className={`${inputClasses} ${errors.pax ? 'border-red-500' : 'border-(--color-border)'}`}
        />
        {errors.pax && <span className="text-(length:--font-size-xs) text-red-600">{errors.pax.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="eventType" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
          Type of Event
        </label>
        <input
          id="eventType"
          type="text"
          placeholder="e.g. School Meals, Office Lunch"
          {...register('eventType')}
          className={`${inputClasses} border-(--color-border)`}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="eventDate" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
          Event Date <span className="text-red-600">*</span>
        </label>
        <input
          id="eventDate"
          type="date"
          min={todayISODate()}
          max={maxEventISODate()}
          {...register('eventDate', {
            required: 'Event date is required.',
            validate: (value) => {
              if (!value) return true
              if (value < todayISODate()) return 'Event date cannot be in the past.'
              if (value > maxEventISODate()) return 'Event date must be within the next 5 years.'
              return true
            },
          })}
          className={`${inputClasses} ${errors.eventDate ? 'border-red-500' : 'border-(--color-border)'}`}
        />
        {errors.eventDate && (
          <span className="text-(length:--font-size-xs) text-red-600">{errors.eventDate.message}</span>
        )}
      </div>

      {category === 'Other' && (
        <div className="flex flex-col gap-1 sm:col-span-3">
          <label htmlFor="otherCategory" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
            Please describe your requirement
          </label>
          <textarea
            id="otherCategory"
            rows={3}
            {...register('otherCategory', {
              validate: (value) => {
                if (category === 'Other' && !value?.trim()) return 'Please describe your requirement.'
                if (countWords(value ?? '') > MAX_DESCRIPTION_WORDS) {
                  return `Description must not exceed ${MAX_DESCRIPTION_WORDS} words.`
                }
                return true
              },
            })}
            className={`${inputClasses} resize-none ${errors.otherCategory ? 'border-red-500' : 'border-(--color-border)'}`}
          />
          <span className="text-(length:--font-size-xs) text-(--color-text-secondary)">
            {countWords(otherCategory ?? '')}/{MAX_DESCRIPTION_WORDS} words
          </span>
          {errors.otherCategory && (
            <span className="text-(length:--font-size-xs) text-red-600">{errors.otherCategory.message}</span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-1 sm:col-span-3">
        <label htmlFor="address" className="text-(length:--font-size-xs) font-(--font-weight-semibold) text-(--color-text-primary)">
          Complete Address
        </label>
        <textarea
          id="address"
          rows={3}
          maxLength={MAX_ADDRESS_LENGTH}
          {...register('address', {
            maxLength: { value: MAX_ADDRESS_LENGTH, message: `Address must not exceed ${MAX_ADDRESS_LENGTH} characters.` },
          })}
          className={`${inputClasses} resize-none ${errors.address ? 'border-red-500' : 'border-(--color-border)'}`}
        />
        <span className="text-(length:--font-size-xs) text-(--color-text-secondary)">
          {(address ?? '').length}/{MAX_ADDRESS_LENGTH} characters
        </span>
        {errors.address && <span className="text-(length:--font-size-xs) text-red-600">{errors.address.message}</span>}
      </div>

      <div className="flex flex-col items-start gap-1 sm:col-span-3">
        <button
          type="submit"
          disabled={!isValid}
          className="rounded-(--radius-full) bg-(--color-primary) px-6 py-3 text-(length:--font-size-sm) font-(--font-weight-semibold) text-(--color-text-on-primary) transition-colors hover:enabled:bg-(--color-secondary) disabled:cursor-not-allowed disabled:opacity-50"
        >
          Get a Quote
        </button>
        {!isValid && (
          <span className="text-(length:--font-size-xs) text-(--color-text-secondary)">
            Please fill in all required fields (marked with *) correctly to enable this button.
          </span>
        )}
      </div>
    </form>
  )
}

export default ContactForm
